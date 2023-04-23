import React from 'react'
import PlanCardItem from '../PlanCardItem'
import s from './index.module.css'

export default function PlanCard({ type, description, price , contacts, isRecommend, items}) {

const title_price = price !== 0 && 'statrts at'; 

const st = type === 'Free' && s.title_price || type === 'Essentials' && s.title_price_2

  return (
    
        // {
        //     type === 'Standard' ?  <p className={s.recommend}>Mailchimp Recommends</p> :''
        // }
        <div>
            <div>
            {
                isRecommend && <p className={s.recommend}>Mailchimp Recommends</p>
            }
            </div>
           
            <div className={s.plan_card}>
           
            <p>{ type }</p>
            <p>{ description }</p>
            <p className={st}>{title_price} 
                <span>$
                    <span>{ price }</span>
                </span>
            </p>
            <p>/month based { contacts } contacts*</p>
            <div>
                {
                    items.map(el => <PlanCardItem key={el.id} {...el}/>)
                }
            </div>
        </div>
        </div>
        
 
    
  )
}
