console.log('Starting notes.js');
const fs = require('fs');

var addNote = (title, body) => {
  var notes = []
  var note = {
    title,
    body
  };

  try {
    var noteString = fs.readFileSync('./playground/notes.json');
    notes = JSON.parse(noteString);

  } catch (e) {

  }
  var duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync('./playground/notes.json', JSON.stringify(notes));
  }
};

var getAll = () => {
  console.log('getting all notes');
};

var getNote = (title) => {
  console.log('Getting all notes', title);
};

var removeNote = (title) => {
  console.log('removing  note', title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
