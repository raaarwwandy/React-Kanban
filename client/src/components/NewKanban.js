import React from 'react';

class NewKanban extends React.Component{
  constructor(props) {
    super(props);
    this.state={Title: "", Priority: "", Status: ""};
    this.handleChangeTitle=this.handleChangeTitle.bind(this);
    this.handleChangePriority=this.handleChangePriority.bind(this);
    this.handleChangeStatus=this.handleChangeStatus.bind(this);
    this.handleChangeCreatedBy=this.handleChangeCreatedBy.bind(this);
    this.handleChangeAssignedTo=this.handleChangeAssignedTo.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this)
  }

  handleChangeTitle(event){
    this.setState({
      Title: event.target.value
    })
  }

  handleChangePriority(event){
    this.setState({
      Priority: event.target.value
    })
  }

  handleChangeStatus(event){
    this.setState({
      Status: event.target.value
    })
  }

  handleChangeCreatedBy(event){
    this.setState({
      Created_by: event.target.value
    })
  }

  handleChangeAssignedTo(event){
    this.setState({
      Assigned_by: event.target.value
    })
  }

  handleSubmit(event){
    console.log('some event', this.props)
    event.preventDefault();
    this.props.createNewCard({
      Title:this.state.Title,
      Priority:this.state.Priority,
      Created_by:this.state.Created_by,
      Assigned_by:this.state.Assigned_by
    })
  }

  render(){
    return(
      <div className="task">
        <h3>Make A New Task</h3>
        <div className="newTask">
        <form className="makePost" onSubmit={this.handleSubmit} >
          <input type="text" onChange={this.handleChangeTitle} 
          placeholder="Title" name="title"/>
          <input type="text" onChange={this.handleChangePriority} placeholder="Priority" name="priority"/>
          <input type="text" onChange={this.handleChangeCreatedBy}placeholder="Assigned By" name="assigned_by"/>
          <input type="text" onChange={this.handleChangeAssignedTo} placeholder="Assigned To"name="assigned_to"/>
          <input type="submit" value='Post Task'/>
        </form>
        </div>
      </div>
    )
  }
}

export default NewKanban;