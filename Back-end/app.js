const express = require('express');
const morgan  = require('morgan')
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv  = require("dotenv");
const routes = require("./src/routes/api");
const authRoutes = require('./src/routes/authRoutes');
const ocrRoutes = require('./src/routes/ocrRoutes');

const app = express();
dotenv.config()
app.use(cors({
    methods : '*',
    allowedHeaders : ['Content-Type', 'Authorization', 'refreshToken'],
}))

var corsOptions = {
    origin: '*',
}

app.use('/auth', authRoutes);
app.use('/ocr', ocrRoutes);
app
    .use('/auth', authRoutes)
    .use('/ocr', ocrRoutes)
    .use(morgan('dev'))
    .use(cors())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended:true}))
    .use('/',routes)
    .use('/', cors(corsOptions), routes);


app.listen(process.env.BACK_PORT, () => {
    console.log(`server running : http://${process.env.BACK_HOST}:${process.env.BACK_PORT}` )

})