require('dotenv').config()
const cors = require('cors')
const dbConnect = require('./db');
const defaultData = require('./default');
const router = require('./routes');

const app = require('express')()

dbConnect();

const PORT = process.env.PORT || 5555;

app.use(cors())
app.use(router)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

defaultData();


