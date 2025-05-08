alert("Hello World");

console.log("code is running...")
console.log("code is alsa running...")
console.log("code is looking like a wow...")

var a = prompt("Enter your number")
var isTrue = confirm("Are you sure you want to leave this page and Blast your computer")

if(isTrue){
    console.log("Computer is Blasting")
}
else{
    console.log("Computer is not Blasting")
}
console.log("Your number is"+ a)





// // server.mjs
// import { createServer } from 'node:http';

// const server = createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello World!\n');
// });

// // starts a simple http server locally on port 3000
// server.listen(3000, '127.0.0.1', () => {
//   console.log('Listening on 127.0.0.1:3000');
// });

// // run with `node server.mjs`
