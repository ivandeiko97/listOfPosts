import React, {Component} from 'react';
import User from '../userComponent/User';
import './post.css';
import CommentListHandler from '../commensComponent/CommentListHandler';


export default class Post extends Component {
  render() {
    return (
      <article>
        <section className="bodyPost">
          <h1 className="titlePost">{this.props.post.title}</h1>
          <User user={this.props.post.user}/>
          <p className="textPost">{this.props.post.body}</p>
        </section>
        <span className="remove" onClick={() => this.props.remove(this.props.post.id)}>&times;</span>
        <CommentListHandler commentList={this.props.commentList}/>
      </article>
    )
  }
}


