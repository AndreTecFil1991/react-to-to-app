import React from "react";
import "./App.css";
import "./Glyphicon.css";
import BoardContainer from './BoardContainer.jsx';

class App extends React.Component {
  render() {
    return (
      <div className="main-content">
        <header id="pageHeader">
          <h2>My First React Page</h2>
        </header>
        <div className="col-sm-12">
          <div className="row-title">
            <div className="col-sm-7" id="left-container-title">
              <h4>TO DO List</h4>
            </div>
            <div className="col-sm-5" id="right-container-title">
              <h4>Already checked</h4>
            </div>
          </div>
          <BoardContainer board1Data={[]} board2Data={[]} />
        </div>
        <footer id="pageFooter">TecFil @2017</footer>
      </div>
    );
  }
}

export default App;
