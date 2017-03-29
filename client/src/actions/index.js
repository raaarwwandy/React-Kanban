export const ADD_CARD = 'ADD_CARD';


export function addCard(_id, status, title, priority, created_by, assigned_to){
  return {
    type: ADD_CARD, 
    _id, 
    status,
    title, 
    priority, 
    created_by, 
    assigned_to,
  }
}
