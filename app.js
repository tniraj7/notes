console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes');

const argv = yargs.argv;
var command = argv._[0];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body)
    if (note) {
        console.log('Note created');
        console.log('---');
        console.log(`Title: ${note.title}`);
        console.log(`Body: ${note.body}`);
    } else {
        console.log('Note title already taken')
    }
} else if (command === 'list') {
  notes.getAll();
} else if (command === 'read') {
  notes.getNote(argv.title);
} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? "Note was removed" : "Note not found"
  console.log(message);
} else {
  console.log('Command not recognized');
}
