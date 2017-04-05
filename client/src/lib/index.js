export function getAllCards(){
  return new Promise((resolve, reject) =>{
    function reqListener(){
      let data = JSON.parse(this.responseText)
      resolve(data)
    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', reqListener);
    oReq.open('GET', '/api/kanban/todo');
    oReq.setRequestHeader('Content-type', 'application/json')
    oReq.send()
  })
}
 

 export function editCards(card){
  return new Promise((resolve, reject) =>{
    function reqListener(){
      let data = JSON.parse(this.responseText)
      resolve(data)
    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener('load', reqListener);
    oReq.open('PUT', `/api/kanban/todo/${card.id}`);
    oReq.setRequestHeader('Content-type', 'application/json')
    oReq.send()
  })
}