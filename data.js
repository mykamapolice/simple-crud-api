let data = []

class dataConstructor {
  setData(person) {
    data.push(person)
  }

  getData() {
    return data
  }

  getDataById(id) {
    const person = data.find(per => per.id === id)
    return person
  }

  deleteData(id) {
    const newData = data
    newData.filter(person => person.id === id)
    data = newData
    return newData
  }
}

module.exports = dataConstructor
