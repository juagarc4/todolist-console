require('colors')
const Tasks = require('./models/tasks')
const { inquirerMenu, pause, readInput, tasksToDelete, confirm } = require('./helpers/inquirer')
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
      case '6':
        const id = await tasksToDelete(tasks.listArr)
        const deleteTask = await confirm('Are you sure?')
        if (deleteTask) {
          tasks.deleteTask(id)
        }
        break
      case '7':
        const quantity = await readInput('Quantity: ')
        if (quantity > 0) {
          for (let i = 1; i <= quantity; i++) {
            let desc = `Task ${i}`
            tasks.createTask(desc)
          }
          console.log(`\n${quantity} task(s) was/were created successfuly`.bgGreen)
        }
        break
      case '8':
        const deleteTasks = await confirm('Are you sure?')
        if (deleteTasks) {
          tasks.deleteAll()
        }
        break
      default:
        break
    }

    saveDb(tasks.listArr)

    if (opt !== '0') await pause()
  } while (opt !== '0')
}

main()
