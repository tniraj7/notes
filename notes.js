console.log('Starting notes.js');
const fs = require('fs');


var fetchNotes = () => {
  try {
    var noteString = fs.readFileSync('./playground/notes.json');
    return JSON.parse(noteString);

  } catch (e) {
    return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('./playground/notes.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };
  var duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
   return note;
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
