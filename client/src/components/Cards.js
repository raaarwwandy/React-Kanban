import React from 'react';

const Card = (props) =>(
  <ul>
    <h1>{props.title}</h1>
    <h3>{props.priority}</h3>
    <h3>{props.created_by}</h3>
    <h3>{props.assigned_to}</h3>
  </ul>
);

export default Card;