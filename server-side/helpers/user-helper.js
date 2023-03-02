const nodemailer = require('nodemailer')
const notificationSchema = require('../models/notification')
const mongoose = require('mongoose')
let ObjectId = mongoose.Types.ObjectId

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'xplore245@gmail.com', // generated ethereal user
        pass: 'fhgttmmruocmawzl', // generated ethereal password
    },
});

module.exports={
    
    OTPgenerator: () => {
        try {
            console.log('OTPgenerator');
            const otpLength = 4
            let otp = ""
            for (let i = 0; i < otpLength; i++) {
                otp += Math.floor(Math.random() * 9)
            }
            return otp
        } catch (error) {
            res.json({
                status: "Failed",
                message: error.message,
            })
        }

    },
    sentOTPverificationmail: (email, otp) => {
        try {
            console.log('sentOTPverificationmail');
            const mailOptions = {
                form: 'xplore245@gmail.com',
                to: email,
                subject: "verify your email",
                html: `<p>Enter <b> ${otp}  </b> in the app to verify your email address</p>`
            }

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log("errr");
                    console.log(error);
                } else {
                    console.log("Verification otp mail sent");
                    console.log(info.response);
                    res.json({
                        status: "pending",
                        message: "Verification otp mail sent",
                        mail: email,

                    })
                }
            });
        } catch (error) {
            res.json({
                status: "Failed",
                message: error.message,
            })
        }
    },

    // ADD NOTIFICATION //

    addNotifications: async (data) => {
        try {
            const { receiverId, senderId, postId, type,  } = data
            const res = await notificationSchema.findOne({
                triggered_by: senderId,
                notify: receiverId,
                postId: postId,
                notification: type,
            })
            if (!res) {
                const notifications = new notificationSchema({
                    triggered_by: senderId,
                    notify: receiverId,
                    postId: postId,
                    notification: type,
                })
                notifications.save()
            } else {
                await notificationSchema.findByIdAndUpdate(ObjectId(res._id), {
                    notification: type
                })
            }
            return { msg: "sucessfully" }
        } catch (error) {
            return error.message
        }
    },

    // GET NOTIFICATION //

    getUserNotifications: async (UID) => {
        try {
            const notifications = await notificationSchema.aggregate([
                {
                    $match: {
                        notify: ObjectId(UID)
                    }
                },
                {
                    $lookup: {
                        from: 'users',
                        localField: 'triggered_by',
                        foreignField: '_id',
                        as: "triggeredUser"
                    }
                }, {
                    $unwind: '$triggeredUser'
                },
                //  {
                //     $project: {
                //         userName: '$triggeredUser.userName',
                //         userDp: '$triggeredUser.profilePhoto',
                //         time: '$createdAt',
                //         type: '$notification',
                //         read: '$read',
                //     }
                // }, 
                {
                    $sort: { 'time': -1 }
                }
            ])
            return notifications
        } catch (error) {
            return error.message
        }
    },
    // UPDATE NOTIFICATION //

    doNotifications: async (NID) => {
        try {
            const notification = await notificationSchema.findByIdAndUpdate(NID, {
                $set: {
                    read: true,
                }
            })
            return { msg: "sucessfully" }
        } catch (error) {
            return error.message
        }
    },
    // GET NOTIFICATION COUNT //

    getUserNotificationsCount: async (UID) => {
        try {
            const notifications = await notificationSchema.aggregate([
                {
                    $match: {
                        notify: ObjectId(UID),
                        read: false
                    }
                }
            ])
            return notifications
        } catch (error) {
            return error.message
        }
    },
}