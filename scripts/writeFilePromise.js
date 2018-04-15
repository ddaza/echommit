const fs = require('fs')

const writeFilePromise = (fileName, data) => new Promise((resolve, reject) => {
  fs.writeFile(fileName, data, err => err ? reject(err) : resolve(fileName))
})

module.exports = writeFilePromise
