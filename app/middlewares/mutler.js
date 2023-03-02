const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, 'public/uploads/');
    },
    filename: function (req, file, callback) {
        callback(null, Math.floor(Math.random() * 99999999) + '-' + file.originalname);
    },
});

const fileFilter = (req, file, callback) => {
    if (
        file.mimetype === 'image/jpeg' ||
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg'
    ) {
        callback(null, true);
    } else {
        //reject file
        callback(
            {
                message: 'Unsupported file format',
            },
            false
        );
    }
};

const uploadMiddleware = multer({
    storage,
    limits: {
        fileSize: 3000000,
    },
    fileFilter: fileFilter,
});

module.exports = uploadMiddleware;