// import services images
const { createImages, getAllImage } = require('../../../services/mongoose/images');

const { StatusCodes } = require('http-status-codes');

const index = async (req, res) => {
    try {
        const result = await getAllImage(req);
        res.status(StatusCodes.OK).json({
            data: result
        });
    } catch (err) {
        next(err);
    }
};

const create = async (req, res) => {
    try {
        console.log('req.file');
        console.log(req.file);
        const result = await createImages(req);

        res.status(StatusCodes.CREATED).json({
            data: result,
        });

    } catch (err) {
        next(err);
    }
};

module.exports = { create, index };