const inquirer = require('inquirer')
require('colors')

const questions = [
  {
    type: 'list',
    name: 'option',
    message: 'What do you want to do?',
    choices: ['opt1', 'opt2', 'opt3'],
  },
]
const inquirerMenu = async () => {
  console.clear()
  console.log('======================'.green)
  console.log('   Select an option'.green)
  console.log('======================\n'.green)

  const opt = await inquirer.prompt(questions)

  return opt
}

module.exports = {
  inquirerMenu,
}
