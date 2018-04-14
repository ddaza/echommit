const fs = require('fs')

module.exports = function writeFilePromise (fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        return reject(err)
      }
      resolve(fileName)
    })
  })
}
