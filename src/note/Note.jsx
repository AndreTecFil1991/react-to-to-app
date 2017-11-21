import React from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import "./Glyphicon.css"
import "./Note.css";
import {
  retrieveBoardDimensions,
  NoteMeasure,
  randomBetween
} from "../js/Calculations.js";

class Note extends React.Component {
  edit() {
    this.props.updateState(this.props.id, true);
  }

  save() {
    this.props.onChange(
      ReactDOM.findDOMNode(this.refs.newText).value,
      this.props.index
    );
    this.props.updateState(this.props.id, false);
  }

  remove() {
    if (this.props.onRemove) this.props.onRemove(this.props.index);
  }

  checked() {
    if (this.props.onCheck)
      this.props.onCheck(this.props.index, this.props.children);
  }

  componentWillMount() {
    var boardDimensions = retrieveBoardDimensions(this.props.board);
    this.style = {
      left:
        randomBetween(
          boardDimensions.width.start,
          boardDimensions.width.end - NoteMeasure
        ) + "px",
      top:
        randomBetween(
          boardDimensions.height.start,
          boardDimensions.height.end - NoteMeasure
        ) + "px"
    };
  }

  renderDisplay() {
    let visibilityControl = "visible";

    if (this.props.board === "rightBoard") visibilityControl = "hidden";
    return (
      <Draggable>
        <div className="note" style={this.style}>
          <p>
            {this.props.children}
            <br />
            {this.props.time}
          </p>
          <span>
            <button
              onClick={this.checked.bind(this)}
              className="btn btn-sm btn-success glyphicon glyphicon-ok"
              style={{ visibility: visibilityControl }}
            />
            <button
              onClick={this.edit.bind(this)}
              className="btn btn-sm btn-primary glyphicon glyphicon-pencil"
              style={{ visibility: visibilityControl }}
            />
            <button
              onClick={this.remove.bind(this)}
              className="btn btn-sm btn-danger glyphicon glyphicon-trash"
            />
          </span>
        </div>
      </Draggable>
    );
  }

  renderForm() {
    return (
      <div className="note" style={this.style}>
        <textarea
          ref="newText"
          defaultValue={this.props.children}
          className="form-control"
        />
        <button
          onClick={this.save.bind(this)}
          className="btn btn-sm btn-success glyphicon glyphicon-floppy-disk"
        />
      </div>
    );
  }

  render() {
    if (this.props.editing) {
      return this.renderForm();
    } else {
      return this.renderDisplay();
    }
  }
}

export default Note;
