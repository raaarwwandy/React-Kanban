import { ADD_CARD } from '../actions';

const initialState = {
  cards : []
}

function cards(state = initialState, action){
  switch(action.type){
    case ADD_CARD:
    return Object.assign({}, state, {
        cards: [
          ...state.cards, {
            id: action._id,
            title: action.title, 
            status: action.status,
            priority: action.priority, 
            created_by: action.created_by,
            assigned_to: action.assigened_to
          }
        ]
      })
      default: 
        return state;
  } 
}

export default cards;