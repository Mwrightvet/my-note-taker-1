const express = require("express");
const router = express.Router();
const fsUtils = require("../helpers/fsUtils");
const path = require("path");

// GET /api/notes - Get all notes
router.get("/notes", (req, res) => {
  fsUtils
    .readFromFile(path.join(__dirname, "../db/db.json"))
    .then((data) => {
      res.json(JSON.parse(data));
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error reading notes data");
    });
});

// POST /api/notes - Create a new note
router.post("/notes", (req, res) => {
  const newNote = req.body;
  fsUtils
    .readAndAppend(newNote, path.join(__dirname, "../db/db.json"))
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error creating new note");
    });
});

// DELETE /api/notes/:id - Delete a note by ID
router.delete("/notes/:id", (req, res) => {
  const noteId = req.params.id;
  fsUtils
    .readFromFile(path.join(__dirname, "../db/db.json"))
    .then((data) => {
      const notes = JSON.parse(data);
      const updatedNotes = notes.filter((note) => note.id !== noteId);
      fsUtils
        .writeToFile(path.join(__dirname, "../db/db.json"), updatedNotes)
        .then(() => {
          res.sendStatus(200);
        })
        .catch((err) => {
          console.error(err);
          res.status(500).send("Error deleting note");
        });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error deleting note");
    });
});

module.exports = router;
