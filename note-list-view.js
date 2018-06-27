(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  }

  exports.NoteListView = NoteListView;
})(this);

NoteListView.prototype.createHTML = function (list) {
  var htmlString = `<ul>`;
  list.notesArray.forEach(function(note){
    htmlString += `<li><div>Note Title: ${note.text}</div></li>`
  });
  htmlString += `</ul>`;
  return htmlString;
};
