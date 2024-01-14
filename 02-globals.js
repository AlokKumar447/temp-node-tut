// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about environment where the program is being executed

console.log(__dirname)
console.log(__filename)
setInterval(() => {
  console.log('hello world')
}, 1000)
/** o/p:
 
 /Users/alokkumar/Desktop/dev/freecodecamp_8hrs/node-express-course-main/01-node-tutorial
/Users/alokkumar/Desktop/dev/freecodecamp_8hrs/node-express-course-main/01-node-tutorial/02-globals.js
hello world
hello world
hello world
hello world
hello world
hello world
hello world
hello world
^C
 */