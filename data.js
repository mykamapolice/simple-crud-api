let data = []

class dataConstructor {
  setData(person) {
    data.push(person)
  }

  getData() {
    return data
  }

  deleteData(id) {
    const newData = data
    console.log(data)
    newData.filter(person => person.id === id)
    data = newData
    return newData
  }
}

module.exports = dataConstructor
