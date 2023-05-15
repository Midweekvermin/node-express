const express = require('express');

const app = express();

//middleware
app.use((req, res, next) => {
    console.log('hello')
    next();
})

app.get('/', (req,res) => {
    res.send('Happy Mothers Day Mom!!!!!')
})

app.listen(80);