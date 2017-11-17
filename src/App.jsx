import React from "react";
import "./App.css";
import "./Glyphicon.css";
import "./Note.css";
import BoardContainer from './BoardContainer.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="main-content">
        <header id="pageHeader">
          <h2>My First React Page</h2>
        </header>
        <BoardContainer leftBoardNotes={[]} rightBoardNotes={[]} />
        <footer id="pageFooter">TecFil @2017</footer>
      </div>
    );
  }
}

export default App;
