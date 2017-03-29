import React, { Component } from 'react';

class Card extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className='singleCard'>
      <h2>Task: {this.props.title}</h2>
      <h3>Status: {this.props.status}</h3>
      <h3>Priority: {this.props.priority}</h3>
      <h3>Assigned To: {this.props.assigned_to}</h3>
      <h3>Assigned By: {this.props.assigned_by}</h3>
      </div>
    )
  }
  
};

export default Card;


