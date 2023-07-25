import React, { Component } from 'react'
import './Form.css'
import AllTasks from './AllTasks';
import{AiFillDelete,AiFillEdit} from 'react-icons/ai'
import EditForm from './EditForm';
 class Form extends Component {
  constructor(props){
  super(props)
  
  this.state={
    TaskList:[],
    task:'',
    isEditing:false,
    tasktoEdit:'',
  }
   this.HandleChange=(event)=>{
     const {value}=event.target
     this.setState({
      task:value
     });  
  
    };
     this.HandleSubmit=(event)=>{
    event.preventDefault();
    const {task}=this.state
    this.setState((prevProp)=>({
      TaskList:[...prevProp.TaskList,task],
      task:'',
    }));
    };
   
  this.DeleteHandler=(index)=>{
    this.setState((prevState)=>({
    TaskList:[...prevState.TaskList.filter((task,i)=>
     i!==index
      )]
    }))
  }
  this.HandleEdit=(task)=>{
    
 this.setState({
  isEditing:true,
  tasktoEdit:task
  })
  }

  //  this.HandleSave=()=>{
  //  }
  //  this.HandleCancel=()=>{
  //   this.setState({isEditing:false})
  // }
   
  
    
  };
  
  render() {
     const{TaskList,task,isEditing,tasktoEdit}=this.state
    return (
      <>
      <div className='flex-container'>
      <h1 className='todo-list'>TODO-LIST</h1>
    <form  className='Todo-form' onSubmit={this.HandleSubmit}>
    <label className='form-label'><b>Enter your Task Description</b></label><br></br>
    <input id='form-input' name='task' type='text' value={task} onChange={this.HandleChange} ></input><br></br>
    <button  className='submit-btn' type='submit'>Add Task</button>
    
    </form>
    
         
         
    </div>
      
      <div>
      
    {TaskList.map((task,index)=>{
      return(<>
    {isEditing?
        (<EditForm
          task={tasktoEdit} 
          HandleCancel={this.HandleCancel}
          HandleSave={this.HandleSave}/>):
      (
      <div>
      <AllTasks key={index} tasks={task}  />
      <button 
      className='edit-btn' onClick={this.HandleEdit}>
        <AiFillEdit/>Edit</button>
       <button className='delete-btn' onClick={()=>this.DeleteHandler(index)}><AiFillDelete/>
        Delete
        </button>
      </div>)}
      
      
         
       

        </>)
      
    }
      
      
    )}


      </div>
        
        
      
    
      

      </>
    )
  }
}
export default Form