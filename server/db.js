const mongoose = require('mongoose')

const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@news-app.nyiau.mongodb.net/?retryWrites=true&w=majority`

const dbConnect = async () => {
    try {
        await mongoose.connect(DB_URL, ()=> {
            console.log("Database is connected successfully");
        })
    } catch (error) {
        console.log("Database Connection failed", error.message);
    }
}

module.exports = dbConnect;