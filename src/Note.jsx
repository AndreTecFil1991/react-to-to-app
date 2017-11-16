import React from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";
import { calculateBoardDimentions } from "./Calculations.js";

var NoteMeasure =
  Math.floor(Math.sqrt(Math.pow(150, 2) + Math.pow(150, 2))) * 1.25;

class Note extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editing: false };
  }

  edit() {
    this.setState({ editing: true });
  }

  save() {
    this.props.onChange(
      ReactDOM.findDOMNode(this.refs.newText).value,
      this.props.index
    );
    this.setState({ editing: false });
  }

  remove() {
    if (this.props.onRemove) this.props.onRemove(this.props.index);
  }

  checked() {
    if (this.props.onCheck)
      this.props.onCheck(this.props.index, this.props.children);
  }

  componentWillMount() {
    var leftContainerDimensions = calculateBoardDimentions(this.props.board);
    this.style = {
      left:
        this.randomBetween(
          leftContainerDimensions.width.start,
          leftContainerDimensions.width.end - NoteMeasure
        ) + "px",
      top:
        this.randomBetween(
          leftContainerDimensions.height.start,
          leftContainerDimensions.height.end - NoteMeasure
        ) + "px"
    };

    this.setState({ editing: false });
  }

  randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
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
    if (this.state.editing) {
      return this.renderForm();
    } else {
      return this.renderDisplay();
    }
  }
}

export default Note;
