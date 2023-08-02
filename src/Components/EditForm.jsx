import React, { Component } from "react";
import '../styles/eForm.css'

export default class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasktoEdit: this.props.task,
    };
  }


  handleSave = () => {

    const { tasktoEdit } = this.state;
    const description=tasktoEdit.trim()
    if(description===""){
      alert('Field cannot be empty') 
    return;}
    
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
        <h1 className="todo-list">TODO-LIST</h1>
        <form className="Todo-form">
          <label className="form-label">
            <b>Enter your Task Description</b>
          </label>
          <br></br>
          <input
            className="form-input"
            
            ref={(input) => (this.taskInput = input)}
            id="form-input"
            name="task"
            type="text"
            
            defaultValue={this.state.tasktoEdit}
            onChange={this.handleChange}
          ></input>
          <br></br>
          <button className="save-btn" type="button" onClick={this.handleSave}
          style={{borderRadius:'3'}}>
          
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
