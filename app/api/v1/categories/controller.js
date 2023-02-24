const Categories = require('./model');

const create = async (req, res, next) => {
    try {
        const { name } = req.body;
        const result = await Categories.create({ name });
        res.status(201).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

const index = async (req, res, next) => {
    try {
        const result = await Categories.find();
        res.status(200).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

// const find = async (req, res, next) => {
//     try {
//         const { id } = req.params;
//         const result = await Categories.findById(id);
//         if (!result) {
//             return res.status(404).json({ message: 'Id tidak ditemukan' });
//         }
//         res.status(200).json({
//             data: result
//         });
//     } catch (error) {
//         next(error);
//     }
// };

const find = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await Categories.findOne({ id });
        if (!result) {
            return res.status(404).json({ message: 'Id categories tidak ditemukan' });
        }
        res.status(200).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

module.exports = {
    index,
    find,
    create,
};