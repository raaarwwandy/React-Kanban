import React, { Component } from 'react';
import Card from '../../components/Cards.js';
import NewKanban from '../../components/NewKanban.js';
import QueueDisplay from '../../components/QueueDisplay.js';
import ProgressDisplay from '../../components/ProgressDisplay.js';
import DoneDisplay from '../../components/DoneDisplay.js';
import './App.css';

import { createStore } from 'redux';

import { connect } from 'react-redux'; 
import cards from '../../reducers';
import { addCard } from '../../actions';
import { getAllCards } from '../../lib';

let store = createStore(cards);

class App extends Component {
  constructor(props) {
    super(props);
   
    
  }

  createNewCard(newCards){
     var oReq = new XMLHttpRequest();
    //oReq.addEventListener('load', reqListener);
    oReq.open('POST', '/api/kanban/todo');
    oReq.setRequestHeader('Content-type', 'application/json')
    oReq.send(JSON.stringify(newCards))
  }

  componentWillMount() {
    getAllCards()
    .then(data => {
      data.forEach(cards => {
        this.props.getAllCards(cards.id, cards.status, cards.title, cards.priority, cards.created_by, cards.assigned_to);
      })
    }) 
  }



  render(){
    return (
      <div className="App">
        <h1>React Kanban</h1>

        <div className="newCard">
          <NewKanban createNewCard={this.createNewCard} />
        </div>

        
          <div className="container">

          <QueueDisplay cards={this.props.cards} />
          <ProgressDisplay cards={this.props.cards} />
          <DoneDisplay cards={this.props.cards} />

          </div>
       
      </div>
    )
  }
}


const mapStateToProps = (state ) =>{
  return {
    cards: state.cards
  }
};

 
const mapDispatchToProps = (dispatch) =>{
  return { 
    getAllCards: (id, status, title, priority, created_by, assigned_to) =>{
      dispatch(addCard(id, status, title, priority, created_by, assigned_to));
    }
  }
}



export default connect(
  mapStateToProps, 
  mapDispatchToProps)(App);
