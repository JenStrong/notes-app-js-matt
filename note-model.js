(function(exports) {
  function Note(text) {
    this.text = text;
  };


  exports.Note = Note;
})(this);

Note.prototype.returnText = function() {
  return this.text;
};
