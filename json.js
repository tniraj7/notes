const fs = require('fs');

var originalNote = {
    title : 'Some titiel',
    body : 'Some body'
};

var orignalNoteString = JSON.stringify(originalNote);
console.log(typeof orignalNoteString);
fs.writeFileSync('./playground/notes.json', orignalNoteString);

var noteString = fs.readFileSync('./playground/notes.json');

var note = JSON.parse(noteString);
console.log(typeof note);
