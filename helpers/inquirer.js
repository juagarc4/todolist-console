const inquirer = require('inquirer')
require('colors')

const questions = [
  {
    type: 'list',
    name: 'option',
    message: 'What do you want to do?',
    choices: [
      {
        value: '1',
        name: '1. Create task',
      },
      {
        value: '2',
        name: '2. List tasks',
      },
      {
        value: '3',
        name: '3. List pending tasks',
      },
      {
        value: '4',
        name: '4. List completed tasks',
      },
      {
        value: '5',
        name: '5. Mark task(s) as completed',
      },
      {
        value: '6',
        name: '6. Delete task',
      },
      {
        value: '0',
        name: '0. Exit',
      },
    ],
  },
]

const inquirerMenu = async () => {
  console.clear()
  console.log('======================'.green)
  console.log('   Select an option'.green)
  console.log('======================\n'.green)

  const { option } = await inquirer.prompt(questions)

  return option
}

const pause = async () => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Press ${'ENTER'.green} to continue`,
    },
  ]
  console.log('\n')
  await inquirer.prompt(question)
}

const readInput = async (message) => {
  const question = [
    {
      type: 'input',
      name: 'desc',
      message,
      validate(value) {
        if (value.length === 0) {
          return 'Please provide a value'
        }
        return true
      },
    },
  ]

  const { desc } = await inquirer.prompt(question)
  return desc
}
module.exports = {
  inquirerMenu,
  pause,
  readInput,
}
