const express = require('express');

const app = express();

//middleware
app.use((req, res, next) => {
    console.log('hello')
    next();
});

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.post('/profile', (req, res) => {
    const user = {
        name: 'sally',
        hobby: 'soccer',
    }
});

app.get('/', (req,res) => {
    res.send('Happy Mothers Day Mom!!!!!')
});
app.get('/profile',(req,res) => {
    res.send('Getting Profile')
});

app.listen(80);