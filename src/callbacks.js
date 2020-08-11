const express = require('express');

const serverless = require('serverless-http')

const app = express();

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        'hello' : 'hi'
    })
} )


router.post('/', (req, res) => {
    let data = req.body;
    console.log(data.toString('utf8'));
    res.json({
        'hello from post' : data.toString('utf8')
    })
})

app.use('/.netlify/functions/callbacks', router);

module.exports = app;
module.exports.handler = serverless(app);