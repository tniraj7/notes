const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const bodyOptions = {
    demand: false,
    describe: "Body of the note",
    alias: 'b'
};

const argv = yargs
.command('add','Add a new note', {
    'title': titleOptions,
    'body': bodyOptions
})
.command('list','List all notes')
.command('read', 'Read an individual note', {
    'title': titleOptions
})
.command('remove','Remove a particular note', {
    'title': titleOptions
})
.help()
.argv
var command = argv._[0];

if (command === 'add') {
    var note = notes.addNote(argv.title, argv.body)
    if (note) {
        console.log('Note created');
        notes.printNote(note);
    } else {
        console.log('Note title already taken')
    }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s)`);
    allNotes.forEach(note => notes.printNote(note));
} else if (command === 'read') {
    var note = notes.getNote(argv.title);
    if (note) {
        console.log("Note found !");
        notes.printNote(note);
    } else {
        console.log("Note not found !");
    }
} else if (command === 'remove') {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? "Note was removed" : "Note not found"
    console.log(message);
} else {
    console.log('Command not recognized');
}
