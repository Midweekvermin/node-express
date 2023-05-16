const fs = require('fs');

fs.appendFile('./hello.txt', ' This is cool!', err =>{
    if(err){
        console.log(err)
    }
})

fs.readFile('./hello.txt', (err, data) => {
    if(err){
        console.log('error')
    }
    console.log('async', data.toString())
})

const file = fs.readFileSync('./hello.txt');
console.log('sync', file.toString());

fs.writeFile('bye.txt', 'sad to see you go', err => {
    if(err){
        console.log(err)
    }
})

fs.unlink('./bye.txt', err => {
    if(err){
        console.log(err)
    }
})