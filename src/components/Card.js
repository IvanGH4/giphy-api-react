import React from 'react'

const Card = ({info}) => {
    return (
        <div className='card'>
          <h2>{info.title}</h2>
          <img src={info.images.downsized_medium.url} alt={info.title} />
          <a href={info.bitly_gif_url} target='_blank'>Get it!</a>
        </div>
    )
}

export default Card
