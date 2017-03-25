import React, { Component } from 'react';
import Card from '../../components/Cards.js';
import NewKanban from '../../components/NewKanban.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state={
      cards: []
    }
    this.createNewCard = this.createNewCard.bind(this)
    
  }

   componentWillMount() {
    var that = this;
    function reqListener(){
      var data = JSON.parse(this.responseText);
      that.setState({
        cards: data
      })
    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', reqListener);
    oReq.open('GET', "/api/kanban/todo");
    oReq.send();
   }

  createNewCard(newCard){
    console.log('NEW', newCard)
    var oReq = new XMLHttpRequest();
    oReq.open('POST', '/api/kanban/todo');
    oReq.setRequestHeader('Content-type', 'application/json')
    oReq.send(JSON.stringify(newCard))
  }



  render() {
    return (
      <div className="App">
        <h1>React Kanban</h1>
        <div className="newCard">
        <NewKanban createNewCard={this.createNewCard} />
        </div>
        {this.state.cards.map(({_id, title, priority, created_by, assigned_to}) => (
            <Card 
              key={_id}
              title={title}
              priority={priority}
              created_by={created_by}
              assigned_to={assigned_to}
              />
          ))}
        
      </div>
    );
  }
}

export default App;
