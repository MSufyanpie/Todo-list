import React, { Component } from 'react'
import './Form.css'
 class Form extends Component {
  constructor(props){
  super(props)
  this.state={
    TaskList:[],
    task:'',
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
   
    
  
    
  };
  
  render() {
     const{TaskList,task}=this.state
    return (
      <div className='Form'>
    <form  className='Todo-form' onSubmit={this.HandleSubmit}>
    <label className='form-label'>Enter your Task</label><br></br>
    <input id='form-input' name='task' type='text' value={task} onChange={this.HandleChange} ></input><br></br>
    <button  className='submit-btn' type='submit'>Add Task</button>
    
    </form>
    
      
      
        
        
      
    
      </div>
    )
  }
}
export default Form