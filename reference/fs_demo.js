const fs = require('fs');
const path = require('path');

//create a folder

/* fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if(err) throw err;
    console.log('folder created;;;;');
}); */

// create files as well as writefile
/* fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hellow world', err => {
    if(err) throw err;
    console.log('file created;;;;');
});

fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 'I love medod', err => {
    if(err) throw err;
    console.log('file created;;;;');
}); */


//read file

/* fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if(err) throw err; 
    console.log(data);
}); */


//rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'hello2.txt'), err => {
    if(err) throw err; 
    console.log('file rname');
});