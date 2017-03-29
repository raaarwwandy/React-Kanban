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

export default DoneDisplay;