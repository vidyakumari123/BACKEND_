let OS = require ("os")

// console.log(OS)

console.log(OS.freemem())
console.log(OS.totalmem())
console.log(OS.arch())
console.log(OS.hostname())
console.log(OS.cpus().length)
console.log(OS.platform())
console.log(OS.version())