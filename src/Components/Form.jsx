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
      editedTaskIndex: "",
      Length: 0,
      // AscendingList:[],
      // DescendingList:[],
      // isAscending:false,
      // isDescending:false,
      // 
      SelectedOption:""
    };

    this.HandleEdit = (index) => {
      const tasktoEdit = this.state.TaskList[index];
      this.setState({
        isEditing: true,
        tasktoEdit: tasktoEdit,
        editedTaskIndex: index,
      });
    };

    this.handleSave = (updatedTask) => {
      const { editedTaskIndex, TaskList } = this.state;
      const updatedTaskList = [...TaskList];
      updatedTaskList[editedTaskIndex] = updatedTask;

      this.setState({
        TaskList: updatedTaskList,
        isEditing: false,
        tasktoEdit: "",
        // Len: TaskList.length(),
      });
    };

    this.HandleCancel = () => {
      this.setState({
        isEditing: false,
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
        TaskList: [ task,...prevProp.TaskList,],
        task: "",
      }));
    };

    this.DeleteHandler = (index) => {
      this.setState((prevState) => ({
        TaskList: [...prevState.TaskList.filter((task, i) => i !== index)],
      }));
    };

    this.MoveDownHandler = (index) => {
      const { TaskList } = this.state;
      const updatedTaskList = [...TaskList];
      const temp = updatedTaskList[index];
      updatedTaskList[index] = updatedTaskList[index + 1];
      updatedTaskList[index + 1] = temp;
      this.setState({
        TaskList: updatedTaskList,
      });
    };

    this.MoveUpHandler = (index) => {
      const { TaskList } = this.state;
      const updatedTaskList = [...TaskList];
      const temp = updatedTaskList[index];
      updatedTaskList[index] = updatedTaskList[index - 1];
      updatedTaskList[index - 1] = temp;
      this.setState({
        TaskList: updatedTaskList,
      });
    };

    this.FirstMoveUpHandler=(index)=>{
      const {TaskList}=this.state
      const updatedTaskList = [...TaskList];
      const temp = updatedTaskList[index];
      updatedTaskList.shift(temp)
      updatedTaskList.push(temp)
      
      this.setState({
        TaskList: updatedTaskList,
      });
      

    }
    this.LastMoveDownHandler=(index)=>{
      const {TaskList}=this.state
      const updatedTaskList = [...TaskList];
      const temp = updatedTaskList[index];
      updatedTaskList.pop(temp)
      updatedTaskList.unshift(temp)
      
      this.setState({
        TaskList: updatedTaskList,
      });
      

    }
    
    this.SelectOptionHandler=(event)=>{
      const {TaskList}=this.state 
      const updatedList=[...TaskList.sort()]
      const updatedList2=[...updatedList.reverse()]
       
      this.setState({
        SelectedOption:event.target.value
       })
      console.log(this.state.SelectedOption)
      {this.state.SelectedOption=='AtoZ' ?(
          this.setState({
          TaskList:updatedList
         }))
      : this.state.SelectedOption=='ZtoA'?(
          this.setState({
          TaskList:updatedList2
         }))
        :(this.setState({
          TaskList:TaskList
         }))
        }
  
  
  
  
      
    }
  }
  

  render() {
    const { TaskList, task, isEditing, tasktoEdit,  SelectedOption} = this.state;

    return (
      <>

        {isEditing ? (
          <EditForm
            task={tasktoEdit}
            HandleCancel={this.HandleCancel}
            HandleSave={this.handleSave}
            handleChange={this.handleEditChange}
          />
        ) : (
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
                required
                onChange={this.HandleChange}
              ></input>
              <br></br>
              <button className="submit-btn" type="submit">
                Add Task
              </button>
            </form>
            
          </div>
 

 
        )}
        <div  style={{paddingTop:'30px',paddingLeft:'800px' ,width:'1200px'}}>
            <select class="form-select" aria-label="Default select example" onChange={this.SelectOptionHandler} value={SelectedOption}>

              <option value='0' selected>Open this select menu</option>
              <option value="AtoZ">A to Z Alphabetically</option>
              <option value="ZtoA" >Z to A Alphabetically</option>
              
            </select>
          </div>
        <div>
          
          
          
           {TaskList.map((task, index) => {
            return (
              <div key={index}>
                {/* <div key={index}> */}
                  <AllTasks tasks={task} />
                  <button
                    className="edit-btn"
                    onClick={() => this.HandleEdit(index)}
                  >
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

                  {index == 0  ? (
                    <>
                      <button
                        style={{ marginLeft: 10 }}
                        onClick={() => {
                          this.FirstMoveUpHandler(index);
                        }}
                      >
                        MoveUp
                      </button>
                      <button
                        style={{ marginLeft: 5 }}
                        onClick={() => {
                          this.MoveDownHandler(index);
                        }}
                      >
                        MoveDown
                      </button>
                    </>
                  ) : index!==0 && index!== TaskList.length-1 ? (
                    <>
                    <button
                    style={{ marginLeft: 10 }}
                    onClick={() => {
                      this.MoveUpHandler(index);
                    }}
                  >
                    MoveUp
                  </button>
                  <button
                    style={{ marginLeft: 5 }}
                    onClick={() => {
                      this.MoveDownHandler(index);
                    }}
                  >
                    MoveDown
                  </button>
                  </>
                  ):(<></>)}
                  {index ==TaskList.length-1 && TaskList.length!==1  ?  (
                    <>  
                    <button
                        style={{ marginLeft: 5 }}
                        onClick={() => {
                          this.MoveUpHandler(index);
                        }}
                      >
                        MoveUp
                      </button>



                      <button
                        style={{ marginLeft: 5 }}
                        onClick={() => {
                          this.LastMoveDownHandler(index);
                        }}
                      >
                        MoveDown
                      </button>
                    </>
                  ) : (
                    <>
                
                  </>
                  )}
                
                {/* </div> */}
              </div>
            );
          })}
          

        
          

        {/* --------------------------------------------------------------------------------------------------------------------------- */}
 
         
        {/* <div> */}
        {/* {SelectedOption=='ZtoA' ? (TaskList.sort().map((task, index) => {
            return (
              <div key={index}>
                
                  <AllTasks tasks={task} />
                  <button
                    className="edit-btn"
                    onClick={() => this.HandleEdit(index)}
                  >
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

                  {index !== 0 && index !== TaskList.length - 1 ? (
                    <>
                      <button
                        style={{ marginLeft: 10 }}
                        onClick={() => {
                          this.MoveUpHandler(index);
                        }}
                      >
                        MoveUp
                      </button>
                      <button
                        style={{ marginLeft: 5 }}
                        onClick={() => {
                          this.MoveDownHandler(index);
                        }}
                      >
                        MoveDown
                      </button>
                    </>
                  ) : (
                    <></>
                  )}
                  {index === 0 && TaskList.length > 1 ? (
                    <>
                      <button
                        style={{ marginLeft: 5 }}
                        onClick={() => {
                          this.MoveDownHandler(index);
                        }}
                      >
                        MoveDown
                      </button>
                    </>
                  ) : (
                    <></>
                  )}
                  {index === TaskList.length - 1 && index !== 0 ? (
                    <>
                      <button
                        style={{ marginLeft: 10 }}
                        onClick={() => {
                          this.MoveUpHandler(index);
                        }}
                      >
                        MoveUp
                      </button>
                    </>
                  ) : (
                    <></>
                  )}
               
              </div>
            );
          })) 
          
          
          :(<></>)}
   */}


  </div>
        {/* </div> */}
          

          
          {/* ------------------------------------------------------------------------------------------------------------------------------ */}
        
          
      </>
    );
  }
}
export default Form;
