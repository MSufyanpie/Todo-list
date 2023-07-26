import React, { Component } from "react";
import "./Form.css";
import AllTasks from "./AllTasks";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import EditForm from "./EditForm";
class Form extends Component {

  handleEditChange = (event) => {
    const { value } = event.target;
    this.setState((prevState) => ({
      tasktoEdit: value,
      TaskList: prevState.TaskList.map((task, index) =>
        index === prevState.editedTaskIndex ? value : task
      ),
    }));
  };
  constructor(props) {
    super(props);
    this.state = {
      TaskList: [],
      task: "",
      isEditing: false,
      tasktoEdit: "",
      editedTaskIndex: -1, // To store the index of the task being edited
    };

    this.HandleEdit = (index) => { // Modified to pass the index
      const tasktoEdit = this.state.TaskList[index];
      this.setState({
        isEditing: true,
        tasktoEdit: tasktoEdit,
        editedTaskIndex: index, // Store the index of the task being edited
      });
    };

    this.HandleSave = () => {
      const { TaskList, tasktoEdit, editedTaskIndex } = this.state;
      const updatedTaskList = [...TaskList];
      updatedTaskList[editedTaskIndex] = tasktoEdit;
      this.setState({
        TaskList: updatedTaskList,
        isEditing: false,
        tasktoEdit: "",
        editedTaskIndex: -1, // Reset the editedTaskIndex
      });
    };

    this.HandleCancel = () => {
      this.setState({
        isEditing: false,
        tasktoEdit: "",
        editedTaskIndex: -1, // Reset the editedTaskIndex
      });
    };
  

    this.HandleChange = (event) => {
      const { value } = event.target;
      this.setState({
        task: value,
      });
    };
    this.HandleSubmit = (event) => {
      event.preventDefault();
      const { task } = this.state;
      this.setState((prevProp) => ({
        TaskList: [...prevProp.TaskList, task],
        task: "",
      }));
    };

    this.DeleteHandler = (index) => {
      this.setState((prevState) => ({
        TaskList: [...prevState.TaskList.filter((task, i) => i !== index)],
      }));
    };
  }

  render() {
    const { TaskList, task, isEditing, tasktoEdit } = this.state;
    return (
      <>
     
          <div className="flex-container">
          <h1 className="todo-list">TODO-LIST</h1>
          <form className="Todo-form" onSubmit={this.HandleSubmit}>
            <label className="form-label">
              <b>Enter your Task Description</b>
            </label>
            <br></br>
            <input
              id="form-input"
              name="task"
              type="text"
              value={task}
              onChange={this.HandleChange}
            ></input>
            <br></br>
            <button className="submit-btn" type="submit">
              Add Task
            </button>
          </form>
      

        </div>
        <div>
          {TaskList.map((task, index) => {
            return (
              <div key={index}> {/* Add a wrapping div with a key */}
                {isEditing && index === this.state.editedTaskIndex ? ( 
                  <EditForm
                    task={tasktoEdit}
                    HandleCancel={this.HandleCancel}
                    HandleSave={this.HandleSave}
                    handleChange={this.handleEditChange}
                  />
                ) : (
                  <div>
                    <AllTasks tasks={task} />
                    <button className="edit-btn" onClick={() => this.HandleEdit(index)}> {/* Pass index */}
                      <AiFillEdit />
                      Edit
                    </button>
                    <button
                      className="delete-btn"
                      onClick={() => this.DeleteHandler(index)}
                    >
                      <AiFillDelete />
                      Delete
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
export default Form;



