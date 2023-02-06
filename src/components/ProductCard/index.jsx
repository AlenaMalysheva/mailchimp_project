import React from 'react'
import s from './index.module.css'

export default function ProductCard({ id, title, image, description , background_color }) {
  return (
    <div>
        <div className={[s.img_block,s[background_color]].join(' ')}>
            <p>{ title }</p>
            <img src={ image } alt={ title } />
            <button>add to cart</button>
        </div>
        <div className={[s.description_block,s[background_color]].join(' ')}>
            <p>{ description }</p>
            <button>learn more</button>
        </div>
    </div>
  )
}
