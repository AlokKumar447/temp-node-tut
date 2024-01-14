

const { readFileSync, writeFileSync } = require('fs')

// readFileSync, writeFileSync  are synchronous processes  == don't need a callback
//
//readFile, writeFile  are Asynchronous processes == need a callback
//
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
/*  
  this will override the content of the file.
   writeFileSync --- this create if not exist the file.
writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  
)
*/

writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')
