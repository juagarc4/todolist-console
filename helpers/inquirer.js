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
        name: `${'1.'.green} Create task`,
      },
      {
        value: '2',
        name: `${'2.'.green} List tasks`,
      },
      {
        value: '3',
        name: `${'3.'.green} List pending tasks`,
      },
      {
        value: '4',
        name: `${'4.'.green} List completed tasks`,
      },
      {
        value: '5',
        name: `${'5.'.green} Mark task(s) as completed`,
      },
      {
        value: '6',
        name: `${'6.'.green} Delete task`,
      },
      new inquirer.Separator(),
      {
        value: '7',
        name: `${'7.'.green} Create dummy tasks`,
      },
      {
        value: '8',
        name: `${'8.'.green} Delete ALL tasks`,
      },
      new inquirer.Separator(),
      {
        value: '0',
        name: `${'0.'.green} Exit`,
      },
      new inquirer.Separator(),
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

const tasksToDelete = async (tasks = []) => {
  const choices = tasks.map((task, i) => {
    const idx = `${i + 1}.`.green
    return {
      value: task.id,
      name: `${idx} ${task.desc}`,
    }
  })
  const questions = [
    {
      type: 'list',
      name: 'id',
      message: 'Delete',
      choices,
    },
  ]
  console.log('\n')
  const { id } = await inquirer.prompt(questions)
  return id
}

const confirm = async (message) => {
  const question = [
    {
      type: 'confirm',
      name: 'ok',
      message,
    },
  ]

  const { ok } = await inquirer.prompt(question)
  return ok
}

module.exports = {
  inquirerMenu,
  pause,
  readInput,
  tasksToDelete,
  confirm,
}
