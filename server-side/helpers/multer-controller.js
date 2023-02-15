const multer = require('multer')

const fileStorageEngine=multer.diskStorage({
    destination:(req,file,cb)=>{
      cb(null,'../my-app/public/images')
    },
    filename:(req,file,cb)=>{
      cb(null,Date.now() + '--'+ file.originalname);
    }
  }); 
  
//   const upload=multer({storage:fileStorageEngine})

  module.exports = multer({storage:fileStorageEngine})