import React from "react";
import Board from "../board/Board.jsx";

//mock data to feed the board with notes
var Tasks = [
  "Clean the house",
  "Do the laundry",
  "Fill the fridge",
  "Walk the dog",
  "Wash dishes",
  "Clean the car",
  "Update the pcs!",
  "Hide the PS4"
];

class BoardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftBoardNotes: props.leftBoardNotes,
      rightBoardNotes: props.rightBoardNotes
    };
  }

  moveNote(note) {
    this.state.rightBoardNotes.push(note);
    this.setState({
      leftBoardNotes: this.state.leftBoardNotes,
      rightBoardNotes: this.state.rightBoardNotes
    });
  }

  updateNoteState(noteId, state) {
    let leftBoardNotes = this.state.leftBoardNotes;
    leftBoardNotes.find(item => {
      if (item.id === noteId) {
        item.editing = state;
      }
      return item.id === noteId;
    });

    this.setState({
      leftBoardNotes: leftBoardNotes,
      rightBoardNotes: this.state.rightBoardNotes
    });
  }

  updateBoardNotes(notes, boardName) {
    this.setState({
      leftBoardNotes:
        boardName === "leftBoard" ? notes : this.state.leftBoardNotes,
      rightBoardNotes:
        boardName === "rightBoard" ? notes : this.state.rightBoardNotes
    });
  }

  getLeftBoard() {
    return (
      <Board
        tasks={Tasks}
        count={Tasks.length}
        addButton={true}
        name="leftBoard"
        movenote={this.moveNote.bind(this)}
        updateNoteState={this.updateNoteState.bind(this)}
        updateBoardNotes={this.updateBoardNotes.bind(this)}
        notes={this.state.leftBoardNotes}
        id="left-container"
      />
    );
  }

  getRightBoard() {
    return (
      <Board
        count={0}
        addButton={false}
        name="rightBoard"
        updateBoardNotes={this.updateBoardNotes.bind(this)}
        notes={this.state.rightBoardNotes}
        id="right-container"
      />
    );
  }

  render() {
    return (
      <div className="board-container">
        <div className="left-board">
          <div className="title" id="left-container-title">
            <h4>TO DO List</h4>
          </div>
          {this.getLeftBoard()}
        </div>
        <div className="right-board">
          <div className="title" id="right-container-title">
            <h4>Already checked</h4>
          </div>
          {this.getRightBoard()}
        </div>
      </div>
    );
  }
}

export default BoardContainer;
