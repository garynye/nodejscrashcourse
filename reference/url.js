const { timeStamp } = require('console');
const { SSL_OP_NETSCAPE_REUSE_CIPHER_CHANGE_BUG } = require('constants');
const url = require('url');
const myURL = new URL('http://mywebsite.com:9000/hello.html?id=100&status=active');


//searlized url
console.log(myURL.href);
console.log(myURL.toString());
console.log('hello');

// root domain (Host)

console.log(myURL.host);

//hostname does not get port
console.log(myURL.hostname);


console.log(myURL.pathname);

console.log(myURL.search);

console.log(myURL.searchParams);


myURL.searchParams.append('abc', '123v');

console.log(myURL.searchParams);


myURL.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));