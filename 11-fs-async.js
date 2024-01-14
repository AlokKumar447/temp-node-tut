
// example of async processes

const { readFile, writeFile } = require('fs')

console.log('started at line 3')
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log("At line 9 ",result);
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    console.log("At line 16  ",result);
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task : line 26')
      }
    )
  })
})
console.log('starting next task at line 31')
