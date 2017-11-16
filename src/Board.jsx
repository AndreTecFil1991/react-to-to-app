import React from "react";
import Note from "./Note.jsx";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: props.notes
    };
    this.onCheck = this.onCheck.bind(this);
    this.remove = this.remove.bind(this);
    this.update = this.update.bind(this);
    this.mapNotes = this.mapNotes.bind(this);
  }

  nextId() {
    this.uniqueId = this.uniqueId || 0;
    return this.uniqueId++;
  }

  add(note) {
    let newNote = {
      id: this.nextId(),
      note,
      board: this.props.name
    };
    this.setState({ notes: this.props.notes.push(newNote) });
  }

  update(newText, i) {
    var arr = this.props.notes;
    arr[i].note = newText;
    this.setState({ notes: arr });
  }

  remove(i) {
    this.props.notes.splice(i, 1);
    this.setState({ notes: this.props.notes });
  }

  onCheck(i) {
    let note = this.props.notes.splice(i, 1)[0];
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

  eachNote(note, i, scope) {
    return (
      <Note
        key={note.id}
        index={i}
        onChange={scope.update}
        onRemove={scope.remove}
        onCheck={scope.onCheck}
        board={scope.props.name}
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
          onClick={this.add.bind(this, "New Note")}
        />
      </div>
    );
  }

  renderWithoutButtonToAdd() {
    let notes = this.mapNotes();
    return <div className="board" id={this.props.id}>{notes}</div>;
  }

  render() {
    if (this.props.addButton) return this.renderWithButtonToAdd();
    else return this.renderWithoutButtonToAdd();
  }
}

export default Board;
