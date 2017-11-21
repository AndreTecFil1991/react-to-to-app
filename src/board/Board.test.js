import React from "react";
import ReactDOM from "react-dom";
import Board from "./Board";

it("renders without crashing", () => {
  function something(note) {
    console.log("call");
  };

  const div = document.createElement("div");

  ReactDOM.render(
    <Board
      tasks={[]}
      count={0}
      addButton={true}
      name="board"
      movenote={something.bind(this)}
      updateNoteState={something.bind(this)}
      updateBoardNotes={something.bind(this)}
      notes={[]}
      id="container"
    />,
    div
  );
});
