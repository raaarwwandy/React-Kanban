export const ADD_CARD = 'ADD_CARD';


export function addCard(title, priority, created_by, assigned_to){
  return {
    type: ADD_CARD, 
    title, 
    priority, 
    created_by, 
    assigned_to
  }
}
