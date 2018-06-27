function testNoteCreation() {
  var note = new Note(`it's a hot day!`);
  assert.isTrue(note.text===`it's a hot day!`);
  assert.isTrue(note.returnText() === `it's a hot day!`);
  };
testNoteCreation();

function testNoteList() {
  var noteList = new NoteList();
  noteList.addNote(`is it juicy?`);
  assert.isTrue(noteList.notesArray[0].text === `is it juicy?`);
};
testNoteList();

function testNoteListView() {
  var noteList = new NoteList();
  noteList.addNote(`strawberry pret`);
  noteList.addNote(`blueberry pret`);
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.createHTML(noteList) === "<ul><li><div>Note Title: strawberry pret</div></li><li><div>Note Title: blueberry pret</div></li></ul>");
};

testNoteListView();

function testNoteListViewWithNoNotes() {
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.createHTML(noteList) === "<ul></ul>");
};

testNoteListViewWithNoNotes();
