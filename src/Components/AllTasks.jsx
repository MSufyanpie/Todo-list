import React, { Component } from 'react'
import './AllTasks.css'
export default class AllTasks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // tasktoEdit: this.props.task,
      // isEditing:this.props,
    };
  }


  // handleSave = () => {

  //   const { tasktoEdit } = this.state;
  //   const description=tasktoEdit.trim()
  //   if(description===""){
  //     alert('Field cannot be empty') 
  //   return;}
    
  //   this.props.HandleSave(tasktoEdit); 
    
   
  // };

  // handleChange = (event) => {
  //   const { value } = event.target;
    
    
  //   this.setState({
  //     tasktoEdit: value,
  //   });
    
  // };

    
  render() {
    
  const{tasks}=this.props
  
  
    return (

    
      <div class='all-tasks'>
        
        {tasks}
        
        
        
      </div>
      

      
    )
  }
}

