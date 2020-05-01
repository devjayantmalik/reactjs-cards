import React from 'react';

import CardHeader from './CardHeader';
import CardContent from './CardContent';
import CardFooter from './CardFooter';

const Post = ({post}) => {
  return (
    <div className="ui four wide column">
      <div className="ui card">
    	  <CardHeader image={post.image} />
    		<CardContent
          title={post.title}
          description={post.description}
          username={post.username}
        />
    		<CardFooter stats={post.stats} blogUrl={post.url}/>
    	</div>
    </div>
  )
}

export default Post;
