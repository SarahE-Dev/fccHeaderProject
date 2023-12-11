require('dotenv').config();
const express = require('express');
const logger = require('morgan')
const app = express();


app.use(express.json())

const cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));



app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


app.get('/api/whoami', (req, res)=>{
    try {
        res.json({ipaddress: req.ip, language: req.acceptsLanguages()[0], software: req.headers['user-agent']})
       
    } catch (error) {
        res.status(500).json({message: 'error', error: error})
    }
})

app.listen(3000, ()=>{
    console.log('Server started on Port: 3000');
}
)
