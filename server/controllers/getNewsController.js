const newsModel = require('../models/news');

const getNewsController = async (req, res) => {
    try {
        const respo = await newsModel.find({})
        res.json(respo)
    } catch (error) {
        console.log("errror in backend getnews controller");
    }
}

module.exports = getNewsController;