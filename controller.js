const { uuid } = require('uuidv4');

const dataConstructor = require('./data')

class Controller {
  constructor() {
    this.data = new dataConstructor([])
  }

  async getPersons() {
    return new Promise((resolve, reject) => {
      return resolve(this.data.getData())
    })
  }

  async createPerson(person) {
    return new Promise((resolve, _) => {
      let newPerson = {
        id: uuid(),
        ...person
      };

      this.data.setData(newPerson)

      // return the new created todo
      resolve(newPerson);
    });
  }

  async deletePerson(personId) {
    return new Promise((resolve, _) => {

      const newData = this.data.deleteData(personId)

      resolve(newData);
    });
  }
}

module.exports = Controller;

