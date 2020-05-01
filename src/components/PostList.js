import React from 'react';
import Post from './Post';

import {fetchPosts} from '../actions';
import {connect} from 'react-redux';

class PostList extends React.Component{

  componentDidMount(){
    this.props.fetchPosts();
  }

  renderPosts = () => {
    return (
        <div className="ui stacked grid container">
          {this.props.posts.map(post => <Post key={post.id} post={post} />)}
        </div>
      );

  }

  render(){
    if(this.props.posts.length) return this.renderPosts();

    return(
      <div className="ui padded container">
        <p className="ui red message header">No posts Found.</p>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {posts: state.posts}
}

export default connect(mapStateToProps, {fetchPosts})(PostList);
