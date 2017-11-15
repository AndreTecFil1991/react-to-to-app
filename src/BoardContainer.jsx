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

  getBoard1() {
    return (
      <Board
        tasks={Tasks}
        count={Tasks.length}
        addButton={true}
        name="leftBoard"
        movenote={this.moveNote.bind(this)}
        notes={this.state.board1}
      />
    );
  }

  getBoard2() {
    return (
      <Board
        count={0}
        addButton={false}
        name="rightBoard"
        notes={this.state.board2}
      />
    );
  }

  render() {
    return (
      <div className="row-content">
        <div className="col-sm-7" id="left-container">
          {this.getBoard1()}
        </div>
        <div className="col-sm-5" id="right-container">
          {this.getBoard2()}
        </div>
      </div>
    );
  }
}

export default BoardContainer;
