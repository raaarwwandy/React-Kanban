import React, { Component } from 'react';
import Card from '../components/Cards.js';
// const QueueDisplay = (props) => (
//   <div className="QueueCards">
//     <h1>Task: {props.title}</h1>
//     <h3>Priority: {props.priority}</h3>
//     <h3>Status: {props.status}</h3>
//     <h3>Assigened By: {props.created_by}</h3>
//     <h3>Assigned to: {props.assigned_to}</h3>
//   </div>

// );

  class QueueDisplay extends Component {
    constructor(props){
      super(props);
    }
  

  render(){
    return(
      <div className="queue">
        <h1>Queue</h1>
        {this.props.cards.filter((card) => card.status ==='QUEUE').map((cards) =>{
          return(<Card 
            _key={cards.key}
            title={cards.title}
            status={cards.status}
            priority={cards.priority}
            assigned_to={cards.assigned_to}
            />
            )
        })
      }
      </div>
    )
  }
}

export default QueueDisplay;

