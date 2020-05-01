import React from 'react';

const CardFooter = ({meta, blogUrl}) => {
  return (
    <div className="content icons">
      <span><i className="comment outline icon"></i> {meta.comments}</span>
      <span><i className="history icon"></i> {meta.visited}</span>
      <span><i className="heart red icon"></i> {meta.likes}</span>
      <a href="{blogUrl}" target="_blank"><i className="share square outline icon"></i></a>
    </div>
  )
}


export default CardFooter;
