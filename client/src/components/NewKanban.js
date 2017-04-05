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
    this.handleChangeStatus=this.handleChangeStatus.bind(this);
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

  hamdleChangeStatus(event){
    this.setState({
      Status: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.createNewCard({
      Title:this.state.Title,
      Priority:this.state.Priority,
      Created_by:this.state.Created_by,
      Assigned_by:this.state.Assigned_by,
      Status:this.state.Status
    })
  }


  render(){
    return(
      <div className="task">
        <h3>Make A New Task</h3>
        <div className="newTask">
        <form className="makePost" onSubmit={this.handleSubmit} >
          <input type="text" onChange={this.handleChangeTitle} 
          placeholder="TASK" name="title"/>
          <select onChange={this.handleChangeStatus}  name="status" >
            <option disable selected value>select status</option>
            <option value="QUEUE">QUEUE</option>
            <option value="PROGRESS">PROGRESS</option>
            <option value="DONE">DONE</option>
          </select>
          <select onChange={this.handleChangePriority} name="priority">
            <option disable selected value>SELECT PRIORITY</option> 
            <option value="LOW">LOW</option>
            <option value="MEDIUM">MEDIUM</option>
            <option value="HIGH">HIGH</option>
          </select>
          <input type="text" onChange={this.handleChangeCreatedBy}placeholder="Assigned BY" name="created_by"/>
          <input type="text" onChange={this.handleChangeAssignedTo} placeholder="Assigned TO"name="assigned_to"/>
          <input type="submit" value='Post Task'/>
        </form>
        </div>
      </div>
    )
  }
}

export default NewKanban;