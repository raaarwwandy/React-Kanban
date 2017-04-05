import React, { Component } from 'react';
import Card from '../components/Cards.js';


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
            id={cards.id}
            title={cards.title}
            status={cards.status}
            priority={cards.priority}
            assigned_to={cards.assigned_to}
            created_by={cards.created_by}          
            />
            )
        })
      }
      </div>
    )
  }
}

export default QueueDisplay;

