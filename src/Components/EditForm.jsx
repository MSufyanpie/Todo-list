import React, { Component } from 'react'

export default class EditForm extends Component {
    
    constructor(props){
        super(props)
        this.state={
            tasktoEdit:this.props.task
        }
    }
    // handlecancel=()=>{
    //     this.props.HandleCancel()
    // }
    // handlesave=()=>{
    //     this.props.HandleSave()
    // }
    HandleChange=(event)=>{
        const {value}=event.target.value
    this.setState({
        tasktoEdit:value,
    })
     
    }
  render() {
    
    // const tasktoEdit=this.props
    return (
        <div className='flex-container'>
        
      <form  className='Todo-form'>
      <label className='form-label'><b>Enter your Task Description</b></label><br></br>
      <input ref={(input) => (this.taskInput = input)} id='form-input' name='task' type='text' value={this.state.tasktoEdit} onChange={this.HandleChange}></input><br></br>
      <button  className='save-btn' type='submit' onClick={this.handlesave}>Save</button>
      <button  className='cancel-btn' type='submit' onClick={this.handlecancel}>Cancel</button>


      
      </form>
      </div>
        
    )
  }
}
