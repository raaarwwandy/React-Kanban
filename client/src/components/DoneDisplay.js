import React, { Component } from 'react';
import Card from '../components/Cards.js';


  class DoneDisplay extends Component {
    constructor(props){
      super(props);
    }
  

  render(){
    return(
      <div className="done">
        <h1>Done</h1>
        {this.props.cards.filter((card) => card.status ==='DONE').map((cards) =>{
          return(<Card 
            id={cards.id}
            title={cards.title}
            status={cards.status}
            priority={cards.priority}
            assigned_by={cards.assigned_to}
            created_by={cards.created_by}
            />
            )
        })
      }
      </div>
    )
  }
}

export default DoneDisplay;