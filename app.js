const colors = require('colors')
const argv = require('./config/yargs')
const { showMenu, pause } = require('./helpers/messages')

console.clear()

const main = async () => {
  console.log('Hello World')
  let opt = ''

  do {
    opt = await showMenu()
    console.log({ opt })
    if (opt !== '0') await pause()
  } while (opt !== '0')
}

main()
