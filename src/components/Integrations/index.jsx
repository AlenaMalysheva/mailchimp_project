import React from 'react'
import s from './index.module.css'
import { integration_list } from './data/integrations'
import Integration_card from '../Integration_card'

export default function Integrations() {
  return (
  <div className={s.integrations_block}>
    <h1>Bring in more data, drive more growth with our integrations</h1>
    <div className={s.integrations}>
        {
          integration_list.map(el => <Integration_card key={el.id} {...el}/>)
        }
    </div>
    <a href='#'>View all 300+ integrations</a>
 </div> 
  )
}
