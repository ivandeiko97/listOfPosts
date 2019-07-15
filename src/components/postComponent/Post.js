import React from 'react';
import User from '../userComponent/User';
import './post.css';
import CommentListHandler from '../commensComponent/CommentListHandler';

export default function Post(props) {
  return (
      <article>
        <section className="bodyPost">
          <h1 className="titlePost">{props.post.title}</h1>
          <User user={props.post.user}/>
          <p className="textPost">{props.post.body}</p>
        </section>
        <span className="remove" onClick={() => props.remove(props.post.id)}>&times;</span>
        <CommentListHandler commentList={props.commentList}/>
      </article>
  )
}
