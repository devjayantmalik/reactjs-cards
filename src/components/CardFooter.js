import React from 'react';

const CardFooter = ({stats, blogUrl}) => {
  return (
    <div className="content icons">
      <span><i className="comment outline icon"></i> {stats.comments}</span>
      <span><i className="history icon"></i> {stats.visited}</span>
      <span><i className="heart red icon"></i> {stats.likes}</span>
      <a href="{blogUrl}" target="_blank"><i className="share square outline icon"></i></a>
    </div>
  )
}


export default CardFooter;
