import React from 'react'
import './artical.css'

const Artical = (props) => {
  return (
    <div className='gpt3__blog-container_artical'>
      <div className="gpt3__blog-container_artical-image">
        <img src={props.imgUrl} alt="BlogImage" />
      </div>
      <div className="gpt3__blog-container_artical-content">
        <div>
          <p>{props.date}</p>
          <h3>{props.title}</h3>
        </div>
        <p>Read more Aritcal</p>
      </div>
    </div>
  )
}

export default Artical
