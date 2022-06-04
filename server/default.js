const data = require('./constants/data');
const newsModel = require('./models/news');

const defaultData = async () => {
    try {
        await newsModel.deleteMany({})
        await newsModel.insertMany(data)
        console.log('Data imported Successfully');
    } catch (error) {
        console.log('Error: ', error.message);
    }
}

module.exports = defaultData;