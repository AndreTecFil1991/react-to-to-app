import React from "react";
import Board from "./Board.jsx";

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
      board1: props.board1Data,
      board2: props.board2Data
    };
  }

  moveNote(note) {
    this.state.board2.push(note);
    this.setState({
      board1: this.state.board1,
      board2: this.state.board2
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
        notes={this.state.board1}
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
        notes={this.state.board2}
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
