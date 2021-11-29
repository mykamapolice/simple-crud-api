require('dotenv').config()
const http = require('http')
const Controller = require("./controller");
const { getReqData, checkId, checkData } = require("./utils");

const server = http.createServer(async (req, res) => {
  if (req.url === "/person" && req.method === "GET") {

    const data = await new Controller().getPersons()
    res.writeHead(200, { "Content-Type": "application/json" })

    res.end(JSON.stringify(data));

  } else if (req.url.includes(`/person/`) &&req.method === "DELETE") {

    const url = req.url
    const id = url.id = url.split("/")[2]

    if(!checkId(id) || !id) {
      res.writeHead(400);
      res.end('Id not valid');
    }

    let person = await new Controller().deletePerson(id);

    if(!person) {
      res.writeHead(404);
      res.end('Id not found');
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end('Person was deleted');

  } else if (req.url.includes(`/person/`) &&req.method === "PUT") {

    let person_data = await getReqData(req);

    const url = req.url
    const id = url.id = url.split("/")[2]

    if(!checkId(id) || !id) {
      res.writeHead(400);
      res.end('Id not valid');
    }

    let updatedPerson = await new Controller().udpatePerson(person_data, id);

    if(!updatedPerson) {
      res.writeHead(404);
      res.end('Id not found');
    }

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(updatedPerson);

  } else if (req.url.includes(`/person/`) &&req.method === "GET") {

    const url = req.url
    const id = url.id = url.split("/")[2]

    if(!checkId(id) || !id) {
      res.writeHead(400);
      res.end('Id not valid');
    }

    let person = await new Controller().getPersonsById(id);

    if(!person) {
      res.writeHead(404);
      res.end('Id not found');
    }

    res.writeHead(200, { "Content-Type": "application/json" });

    res.end(JSON.stringify(person));

  } else if (req.url === "/person" && req.method === "POST") {


    let person_data = await getReqData(req);
    if(!checkData(person_data)) {
      res.writeHead(400);
      res.end('Not valid object');
    }

      let person = await new Controller().createPerson(JSON.parse(person_data));

    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify(person));

  } else {

    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }

});


server.listen(PORT = process.env.PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
