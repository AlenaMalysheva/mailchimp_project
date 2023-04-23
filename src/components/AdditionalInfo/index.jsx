import React from 'react'
import s from './index.module.css'

export default function AdditionalInfo() {
  return (
    <div className={s.additionalInfo_block}>
        <div className={s.additionalInfo}>
            <p className={s.disclaimers_info}><strong>*Disclaimers </strong>  
                Mailchimp is the #1 email marketing and automation brand based on competitor brands' publicly available data on worldwide numbers of customers in 2021 / 2022.
                Generate up to 4X more orders with Customer Journey Builder automations based on orders generated through user's connected stores with automations versus when they used bulk emails.
                Get up to 88% more revenue based on emails sent with predicted segments against non-predictive segmented emails for users with connected stores only.
                Standard or Premium Plans only.
                Availability of features and functionality varies by plan type. For details, view plans and pricing
            </p>
            <p className={s.terms_info}><strong>*Valid only</strong> for account holders who: (1) have a Free plan account associated with in-app, web or email promo message and (2) upgrade to [Standard] plan and enter valid payment information through the “Redeem Offer” button. If you receive the offer in-app, you are no longer eligible once you dismiss the in-app message unless you snooze the offer, in which case it will be offered again 24+ hours later. Offer ends at 11:59 PM ET on 11/14/2022. Depending on how many contacts you have when you redeem, you will be placed into different [Standard] plan tiers with different monthly send limits. Offset includes a 100% discount to your recurring monthly plan charges for first 2 monthly bills on promo plan, not including add-on fees or one-time fees. You will lose the offer if you change your plan type, pause, or cancel your account. One offer redemption per Mailchimp account.
                Once discount ends, you will be automatically charged the [Standard] plan rate currently in effect without the discount based on your contacts and email sends, which will automatically renew monthly.
                See full offer terms here
            </p>
        </div>
    </div>
  )
}
