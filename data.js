let data = []

class dataConstructor {
  setData(person) {
    data.push(person)
  }

  getData() {
    return data
  }
}


module.exports = dataConstructor
