import React, { Component } from 'react';
import Card from '../../components/Card.js';
import fakeTodo from '../../lib/fakeDb.js';
import NewKanban from '../../components/NewCard.js';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.card = [];
    this.state = {
      cards: fakeTodo
    }
  }

  componentWillMount() {
    console.log('you posted something');
    const oReq = new XMLHttpRequest();
    oReq.open('POST', "http://localhost:8080/api/kanban/todo");
    oReq.send();
  }

  render() {
    return (
      <div className="App">
          <h2>React Kanban</h2>
          
          <ul>
            {this.state.cards.map(({_id, title, priority, created_by, assigned_to}) =>
              <Card 
              key={_id}
              title={title}
              priority={priority}
              created_by={created_by}
              assigned_to={assigned_to}
              />
              )}
            </ul>
        <NewKanban />
      </div>
    );
  }
}

export default App;
