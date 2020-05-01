import React from 'react';

import CardHeader from './CardHeader';
import CardContent from './CardContent';
import CardFooter from './CardFooter';

const Post = (props) => {
  return (
    <div className="ui four wide column">
      <div className="ui card">
    	  <CardHeader />
    		<CardContent />
    		<CardFooter />
    	</div>
    </div>
  )
}

export default Post;
