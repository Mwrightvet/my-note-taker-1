const fsUtils = require("../helpers/fsUtils");
const path = require("path");

module.exports = (app) => {
  // GET /notes
  app.get("/notes", (req, res) => {
    fsUtils
      .readFromFile(path.join(__dirname, "../public/notes.html"))
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error reading notes.html file");
      });
  });

  // GET *
  app.get("*", (req, res) => {
    fsUtils
      .readFromFile(path.join(__dirname, "../public/index.html"))
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.error(err);
        res.status(500).send("Error reading index.html file");
      });
  });
};
