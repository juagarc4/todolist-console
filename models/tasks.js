require('colors')
const Task = require('./task')

class Tasks {
  _list = {}

  get listArr() {
    const list = []

    Object.keys(this._list).forEach((key) => {
      list.push(this._list[key])
    })

    return list
  }

  constructor() {
    this._list = {}
  }

  createTask(desc = '') {
    const task = new Task(desc)
    this._list[task.id] = task
  }

  loadTasksFromArray(tasks = []) {
    tasks.forEach((task) => {
      this._list[task.id] = task
    })
  }

  listTasks() {
    console.log()
    this.listArr.forEach(({ desc, completedOn }, index) => {
      let idx = `${index + 1}.`.green
      let state = completedOn ? `${'Completed'.green}` : `${'Pending'.red}`
      console.log(`${idx} ${desc} :: ${state}`)
    })
  }
  listPendingTasks() {
    console.log()
    let counter = 0
    this.listArr.forEach(({ desc, completedOn }) => {
      if (!completedOn) {
        counter += 1
        let idx = `${counter}.`.green
        let state = `${'Pending'.red}`
        console.log(`${idx} ${desc} :: ${state}`)
      }
    })
  }
  listCompletedTasks() {
    console.log()
    let counter = 0
    this.listArr.forEach(({ desc, completedOn }) => {
      if (completedOn) {
        counter += 1
        let idx = `${counter}.`.green
        let completionDate = `${completedOn}`.green
        let state = `${'Completed'.green} on ${completionDate}`

        console.log(`${idx} ${desc} :: ${state}`)
      }
    })
  }
}

module.exports = Tasks
