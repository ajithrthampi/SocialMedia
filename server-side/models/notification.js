const mongoose = require('mongoose')

const notificationModel = mongoose.Schema({
    triggered_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    notify: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    notification: {
        type: String, trim: true
    },
    postId:{
        type:mongoose.Schema.Types.ObjectId,
    },
    read:{
        type: Boolean,
        default: false,
    },

}, {
    timestamps: true
})

const Notification = mongoose.model('Notification', notificationModel)

module.exports = Notification