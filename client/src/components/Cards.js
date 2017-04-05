import React, { Component } from 'react';

class Card extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('this .props', this.props)
  }

  render(){
    return(
      <div className='singleCard'>
        <h2>Task: {this.props.title}</h2>
        <h3>Status: {this.props.status}</h3>
        <h3>Priority: {this.props.priority}</h3>
        <h3>Assigned To: {this.props.assigned_to}</h3>
        <h3>Assigned By: {this.props.created_by}</h3>
        <form className="pushreq" onSubmit={this.handleSubmit}>
          <input type="submit" value="Change Status" />
        </form>
      </div>
    )
  }
  
};

export default Card;


