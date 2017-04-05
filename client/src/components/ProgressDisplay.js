import React, { Component } from 'react';
import Card from '../components/Cards.js';


  class ProgressDisplay extends Component {
    constructor(props){
      super(props);
    }
  

  render(){
    return(
      <div className="progress">
        <h1>In Progress</h1>
        {this.props.cards.filter((card) => card.status ==='PROGRESS').map((cards) =>{
          return(<Card 
            id={cards.id}
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

export default ProgressDisplay;