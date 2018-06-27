(function(exports) {
  function NoteList() {
    this.notesArray = [];
  }

  exports.NoteList = NoteList;
})(this);

NoteList.prototype.returnNotesArray = function() {
  return this.notesArray;
};

NoteList.prototype.addNote = function (noteText) {
  var text = new Note(noteText)
  this.notesArray.push(text);
};
