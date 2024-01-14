const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem()/(1024*1024*1024),//gives in GB (size of RAM) 
  freeMem: os.freemem(),   // available space in RAM (in bytes)

}
console.log(currentOS)
