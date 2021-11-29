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

  updateData(newPerson, id) {
    const newData = data.map(person => {
      if(person.id === id) return JSON.parse(newPerson)
      return person
    })
    data = newData
    return newPerson
  }
}

module.exports = dataConstructor
