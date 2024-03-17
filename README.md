# Note Taker

Welcome to the Note Taker project! This application allows users to write and save notes to help organize their thoughts and tasks. The back end of the application is built using Express.js, and it saves and retrieves note data from a JSON file.

## Table of Contents

- [User Story](#user-story)
- [Features](#features)
- [Technology Used](#technology-used)
- [Additional Technical Details](#additional-technical-details)
- [Deployed URL](#deployed-url)
- [Credits](#credits)

## User Story

As a small business owner, I want to be able to write and save notes so that I can organize my thoughts and keep track of tasks I need to complete.

## Features

- **Landing Page**: Presents a link to navigate to the notes page.
- **Notes Page**: Lists existing notes with fields to add new notes.
- **Add New Note**: Input fields for note title and text with save and clear buttons.
- **Save Note**: Saves new note and hides navigation buttons.
- **View Existing Note**: Clicking on a note displays its details.
- **Create New Note**: Button to add a new note, which reveals input fields.

### Technology Used

- Express.js
- JSON
- HTML, CSS, JavaScript
- Heroku Deployment

## Additional Technical Details

- The application should have a db.json file on the back end that will be used to store and retrieve notes using the fs module.
- The following HTML routes should be created:
- `GET /notes` should return the notes.html file.
- `GET \*` should return the index.html file.
- The following API routes should be created:
- `GET /api/notes` should read the db.json file and return all saved notes as JSON.
- `POST /api/notes` should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).

## Deployed URL

- ![demo][public/assets/Demo.gif](public/assets/Demo.gif)

## Credits

- UCB for Starer Code
- Learning Assistant
- UCB Course Material
- YouTube Tutorials
