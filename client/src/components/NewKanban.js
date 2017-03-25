import React from 'react';

class NewKanban extends React.Component{
  constructor(props) {
    super(props);
    this.state={Title: "", Priority: "", Status: ""};
    this.handleChangeTitle=this.handleChangeTitle.bind(this);
    this.handleChangePriority=this.handleChangePriority.bind(this);
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

  handleSubmit(event){
    event.preventDefault();
    console.log(this.state);
    this.props.createNewCards({
      Title:this.state.Title
    })
  }

  render(){
    return(
      <div className="task">
        <h3>Make A New Task</h3>
        <div className="newTask">
        <form class="makePost" onSubmit={this.handleSubmit} >
          <input type="text" placeholder="Title" name="title"/>
          <input type="text" placeholder="Priority" name="priority"/>
          <input type="text" placeholder="Assigned By" name="assigned_by"/>
          <input type="text" placeholder="Assigned To"name="assigned_to"/>
          <input type="submit" value='Post Task'/>
        </form>
        </div>
      </div>
    )
  }
}

export default NewKanban;