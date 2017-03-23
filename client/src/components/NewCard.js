import React from 'react';

class NewKanban extends React.Component{
  constructor(props) {
    super(props);
    this.state={};
  }

  handleChange = (event) => {
    
  }

  render(){
    return(
    <div clasName="task">
      <h3>Make A New Task</h3>
        <div className="newTask">
          <form class="makePost" method="POST">
            <input type="text" name="title"/>
            <input type="text" name="priority"/>
            <input type="text" name="assigned_by"/>
            <input type="text" name="assigned_to"/>
            <input type="submit" value='Post Task'/>
          </form>
        </div>
    </div>
    );
  }
}

export default NewKanban;