const express = require('express');

const app = express();

//middleware
// app.use((req, res, next) => {
//     console.log('hello')
//     next();
// });

// app.use(express.urlencoded({extended: false}));
// app.use(express.json());

// app.post('/profile', (req, res) => {
//     const user = {
//         name: 'sally',
//         hobby: 'soccer',
//     }
// });

// app.get('/', (req,res) => {
//     // req.query
//     // req.body
//     // req.header
//     // req.params
//     //req.status(404).send('not found');
//     res.send('Happy Mothers Day Mom!!!!!');
// });
// app.get('/profile',(req,res) => {
//     res.send('Getting Profile')
// });

app.use(express.static(__dirname + '/public'));

app.listen(80);