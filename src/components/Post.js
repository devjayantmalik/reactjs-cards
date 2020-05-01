import React from 'react';

import CardHeader from './CardHeader';
import CardContent from './CardContent';
import CardFooter from './CardFooter';

const Post = (props) => {
  return (
    <div class="ui card">
  	  <CardHeader />
  		<CardContent />
  		<CardFooter />
  	</div>
  )
}

export default Post;
