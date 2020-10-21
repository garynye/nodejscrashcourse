const fs = require('fs');
const path = require('path');

//create a folder

fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if(err) throw err;
    console.log('folder created;;;;');
});

// create files as well as writefile
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hellow world', err => {
    if(err) throw err;
    console.log('file created;;;;');
});