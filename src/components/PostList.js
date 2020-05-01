import React from 'react';
import Post from './Post';

class PostList extends React.Component{
  render(){
    return(
      <div className="ui stackable grid container">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    )
  }
}

export default PostList;
