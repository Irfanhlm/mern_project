const Categories = require('./model');
const { getAllCategories, createCategories } = require('../../../services/mongoose/categories');

const create = async (req, res, next) => {
    try {
        const { name } = req.body;
        const result = await createCategories(req);
        res.status(201).json({
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

const index = async (req, res, next) => {
    try {
        const result = await getAllCategories();
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

        const result = await Categories.findOne(
            { _id: id },
        );
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

const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        // const result = await Categories.findOneAndUpdate(
        //     { _id: id },
        //     { name }
        // );
        // if (!result) {
        //     return res.status(404).json({ message: 'Id categories tidak ditemukan' });
        // }

        // result.name = name;
        // result.save();

        const result = await Categories.findOneAndUpdate(
            { _id: id },
            { name },
            { new: true }
        );

        res.status(200).json({
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const remove = async (req, res, next) => {
    try {
        const { id } = req.params;
        const result = await Categories.findByIdAndRemove(id);
        res.status(200).json({
            data: result
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    index,
    find,
    create,
    update,
    remove
};