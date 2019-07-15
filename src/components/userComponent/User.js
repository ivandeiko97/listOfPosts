import React from 'react';
import './user.css';

export default function User(props) {
  return (
    <section className="user">
      <h1>Author: {props.user.name}</h1>
      <ul>
        <li className="infoUser"><span>&#9993;</span>{props.user.email}</li>
      </ul>
    </section>
  )
}
