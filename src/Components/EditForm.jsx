import React, { Component } from "react";
import './EditForm.css'

export default class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasktoEdit: this.props.task,
    };
  }


  handleSave = () => {
    const { tasktoEdit } = this.state;
    this.props.HandleSave(tasktoEdit); 
  };

  handleChange = (event) => {
    const { value } = event.target;
    this.setState({
      tasktoEdit: value,
    });
  };


  

  render() {
    return (
      <div className="flex-container">
        <form className="Todo-form">
          <label className="form-label">
            <b>Enter your Task Description</b>
          </label>
          <br></br>
          <input
            ref={(input) => (this.taskInput = input)}
            id="form-input"
            name="task"
            type="text"
            defaultValue={this.state.tasktoEdit}
            onChange={this.handleChange}
          ></input>
          <br></br>
          <button className="save-btn" type="button" onClick={this.handleSave}>
          
            Save
          </button>
          <button
            className="cancel-btn"
            type="button"
            onClick={this.props.HandleCancel}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}
