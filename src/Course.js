import React from 'react'

export const Course = ({image, title, description}) => {
  
  return (
    <div>
      <div className="card">
  <div className="card-image">
    <figure className="image is-4by3">
      <img src={image} alt="Kurslarım"/>
    </figure>
  </div>
  <div className="card-content">
    <div className="media">
     
      <div className="media-content">
        <p className="title is-4">{title}</p>

      </div>
    </div>

    <div className="content">
      {description}
      <br/>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
    </div>
  )
};


