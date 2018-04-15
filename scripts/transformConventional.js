const path = require('path')
const writeFilePromise = require('./writeFilePromise')
const conventional = require('../data/conventional.json')

;(function writeConventional () {
  function conventionalTransform ({ types = {} } = {}) {
    const gitmojiList = Object.keys(types).map(type => (
      {
        value: {
          type: type,
          description: types[type].description
        },
        name: types[type].title
      }
    ))

    return JSON.stringify(gitmojiList, null, 2)
  }

  writeFilePromise(path.resolve(__dirname, 'conventional.json'), conventionalTransform(conventional))
    .then(file => console.log('Written >>', file))
    .catch(console.error.bind())
}())
