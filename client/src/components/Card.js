import React from 'react';

const Card = (props) =>(
  <li>
    <h1>{props.title}</h1>
    <h3>{props.priority}</h3>
    <h3>{props.created_by}</h3>
    <h3>{props.assigned_to}</h3>
  </li>
);

export default Card;