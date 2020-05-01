import React from 'react';


const CardContent = ({title, description, username}) => {
  return (
    <div className="content">
      <strong>{title}</strong>
      <p className="description">{description}</p>
      <div className="meta">
        <span>{username}</span>
      </div>
    </div>
  )
}

export default CardContent;
