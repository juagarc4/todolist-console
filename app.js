require('colors')
const Task = require('./models/task')
const Tasks = require('./models/tasks')
const { inquirerMenu, pause, readInput } = require('./helpers/inquirer')
const { saveDb, readDb } = require('./helpers/handleDb')

const main = async () => {
  let opt = ''
  const tasks = new Tasks()
  const tasksDB = readDb()

  if (tasksDB) {
    tasks.loadTasksFromArray(tasksDB)
  }

  do {
    opt = await inquirerMenu()
    switch (opt) {
      case '1':
        const desc = await readInput('Description: ')
        tasks.createTask(desc)
        break
      case '2':
        tasks.listTasks()
        break
      case '3':
        tasks.listPendingTasks()
        break
      case '4':
        tasks.listCompletedTasks()
        break
      default:
        break
    }

    saveDb(tasks.listArr)

    if (opt !== '0') await pause()
  } while (opt !== '0')
}

main()
