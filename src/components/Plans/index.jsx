import React from 'react'
import s from './index.module.css'
import { plans } from './data/plans'
import PlanCard from '../PlanCard'
import Button from '../Button'

export default function Plans() {
  return (
    <div className={s.plans_block}>
        <div>
            <h2>Find the right plan</h2>
            {/* <p className={s.recommend}>Mailchimp Recommends</p> */}
            <div className={s.cards_container}>
                {
                    plans.map(el => <PlanCard key={el.id} {...el}/>)
                }
            </div>
            <div className={s.additional_block}>
                <div className={s.additional_info}>
                    <p>*Overages </p>
                    <p>apply if contact or email send limit is exceeded. Free plan sending will be paused if contact or email send limit is exceeded. </p>
                    <a href="#">Learn more</a>
                </div>
                <Button>See all plan details</Button>
            </div>
        </div>
    </div>
  )
}
