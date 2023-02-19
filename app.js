require('colors')
const { inquirerMenu } = require('./helpers/inquirer')

console.clear()

const main = async () => {
  console.log('Hello World')
  let opt = ''

  do {
    opt = await inquirerMenu()
    console.log({ opt })
  } while (opt !== 'opt3')
}

main()
