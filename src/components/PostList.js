import React, { Component } from 'react';
import PostHandler from './postComponent/PostHandler';
import IconLoupe from '../IconLoupe';

export default class postList extends Component {
  constructor(props) {
    super(props);
    this.searchItem = this.searchItem.bind(this);
  };
  searchItem(e) {
      this.props.searchItem(e.target.value);
  };
  render() {
    if (!this.props.requested) {
      return (
        <button className="load" onClick={this.props.load}>Load</button>
      );
    } else if (this.props.requested && this.props.posts !== null) {
        const posts = this.props.search ? this.props.searchedPost : this.props.posts; 
          return (
            <div className="posts">
              <div className="searchItem">
                <IconLoupe/>
                <input 
                  className="searchInput"
                  onKeyUp={(e) => this.searchItem(e)}
                  type="text"
                  placeholder="Search"
                />
              </div>
              {posts.map(post => {
                const comments = this.props.comments.filter(comment => comment.postId === post.id)
                return <PostHandler commentList={comments} key={post.id} post={post}/>
              })}
            </div>
          )
        } else {
            return (
              <div className="loading">loading</div>
            );
    };
  };
};
