import React from "react";
import Note from "../note/Note.jsx";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.onCheck = this.onCheck.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.mapNotes = this.mapNotes.bind(this);
  }

  nextId() {
    this.uniqueId = this.uniqueId || 0;
    return this.uniqueId++;
  }

  add(note, editing=false) {
    let notes = this.props.notes;
    let newNote = {
      id: this.nextId(),
      note,
      board: this.props.name,
      editing
    };
    notes.push(newNote);

    this.props.updateBoardNotes(notes, this.props.name);
  }

  update(newText, index) {
    var notes = this.props.notes;
    notes[index].note = newText;

    this.props.updateBoardNotes(notes, this.props.name);
  }

  remove(index) {
    this.props.notes.splice(index, 1)
    this.props.updateBoardNotes(
      this.props.notes,
      this.props.name
    );
  }

  onCheck(index) {
    let note = this.props.notes.splice(index, 1)[0];
    this.props.movenote(note, this);
  }

  componentDidMount() {
    var self = this;
    if (this.props.count) {
      this.props.tasks.forEach(function(task) {
        self.add(task);
      });
    }
  }

  eachNote(note, index, scope) {
    let time = null;
    if (scope.props.name === "rightBoard" && !note.time) {
      let date = new Date();
      let minutes = date.getMinutes();
      time = date.getHours() + ":" + (minutes < 10 ? "0" + minutes : minutes);
    }
    
    return (
      <Note
        key={note.id}
        id={note.id}
        index={index}
        onChange={scope.update}
        onRemove={scope.remove}
        onCheck={scope.onCheck}
        board={scope.props.name}
        time={time}
        updateState={scope.props.updateNoteState}
        editing={note.editing}
      >
        {note.note}
      </Note>
    );
  }

  mapNotes() {
    let scope = this;
    return scope.props.notes.map((note, i) => scope.eachNote(note, i, scope));
  }

  renderWithButtonToAdd() {
    var notes = this.mapNotes();
    return (
      <div className="board" id={this.props.id}>
        {notes}
        <button
          className="btn btn-sm btn-success glyphicon glyphicon-plus"
          onClick={this.add.bind(this, "New Note", true)}
        />
      </div>
    );
  }

  renderWithoutButtonToAdd() {
    let notes = this.mapNotes();
    return (
      <div className="board" id={this.props.id}>
        {notes}
      </div>
    );
  }

  render() {
    if (this.props.addButton) return this.renderWithButtonToAdd();
    else return this.renderWithoutButtonToAdd();
  }
}

export default Board;
