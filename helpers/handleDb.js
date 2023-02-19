const fs = require('fs')

const saveDb = (data) => {
  const file = './db/data.json'

  fs.writeFileSync(file, JSON.stringify(data))
}

module.exports = {
  saveDb,
}
