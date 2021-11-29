function getReqData(req) {
  return new Promise((resolve, reject) => {
    try {
      let body = "";
      // listen to data sent by client
      req.on("data", (chunk) => {
        // append the string version to the body
        body += chunk.toString();
      });
      // listen till the end
      req.on("end", () => {
        // send back the data
        resolve(body);
      });
    } catch (error) {
      reject(error);
    }
  });
}

function checkId(id) {
  const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

  return regexExp.test(id);
}

function checkData(data) {
  const object = JSON.parse(data)
  return object.hasOwnProperty('name') && object.hasOwnProperty('age') && object.hasOwnProperty('hobbies')
}

module.exports = { getReqData, checkId, checkData };
