const path = require('path')
const writeFilePromise = require('./writeFilePromise')
const gitmojis = require('../data/gitmojis.json')

;(function writeGitmojis () {
  function gitmojiTransform ({ gitmojis = [] } = {}) {
    const gitmojiList = gitmojis.map(emoji => (
      {
        value: {
          emoji: emoji.emoji, code: emoji.code
        },
        name: emoji.description
      }
    ))

    return JSON.stringify(gitmojiList, null, 2)
  }

  writeFilePromise(path.resolve(__dirname, 'gitmojis.json'), gitmojiTransform(gitmojis))
    .then(console.log.bind())
    .catch(console.error.bind())
}())
