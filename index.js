require('dotenv').config()
const http = require('http')
const Controller = require("./controller");
const { getReqData } = require("./utils");


const server = http.createServer(async (req, res) => {
  if (req.url === "/person" && req.method === "GET") {

    const data = await new Controller().getPersons()
    res.writeHead(200, { "Content-Type": "application/json" })

    res.end(JSON.stringify(data));

  } else if (req.url === "/person" && req.method === "POST") {

    let person_data = await getReqData(req);
    let person = await new Controller().createPerson(JSON.parse(person_data));

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(person));

  } else {

    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }

});


server.listen(PORT = process.env.PORT, () => {
  console.log(`server started on port: ${PORT}`);
});