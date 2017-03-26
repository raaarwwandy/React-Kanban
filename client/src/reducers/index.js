import { ADD_CARD } from '../actions';

const initialState = {
  cards : []
}

function cards(state = initialState, action){
  console.log('state of store before reducing', state);
  switch(action.type){
    case ADD_CARD:
    let temp = Object.assign({}, state, {
        cards: [
          ...state.cards, {
            title: action.title, 
            priority: action.priority, 
            created_by: action.created_by,
            assigned_to: action.assigened_to
          }
        ]
      })
      console.log('state of store after reducing', temp)
      return temp
      default: 
        return state;
  }
}

export default cards;