import React from 'react'

const CardHeader = ({image}) => {
  return (
    <div className="image">
      <img src={image} alt="Post Cover" />
    </div>
  )
}

export default CardHeader;
