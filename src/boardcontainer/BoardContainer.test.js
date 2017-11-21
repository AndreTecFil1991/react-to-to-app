import React from "react";
import ReactDOM from "react-dom";
import BoardContainer from "./BoardContainer";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<BoardContainer leftBoardNotes={[]} rightBoardNotes={[]}/>, div);
});
