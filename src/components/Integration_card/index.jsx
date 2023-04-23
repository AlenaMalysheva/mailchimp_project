import React from 'react'
import s from './index.module.css'

export default function Integration_card({ name, photo , description }) {
  return (
    <div className={s.integration_card}>
      <div className={s.card_image}>
        <img src= { photo } alt= { name } />
      </div>
      <div className={s.card_info}>
        <h1>{ name }</h1>
        <p>{ description }</p>
      </div>
    </div>
  )
}
