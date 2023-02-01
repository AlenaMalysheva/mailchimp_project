import React from 'react'
import Button from '../Button'
import Nav from '../Nav'
import s from './index.module.css'
import logo from '../../media/logo_site.png'
import { BsGlobe2 } from 'react-icons/bs'

export default function Header() {


  return (
    <header className={s.main_header}>
        <div>
            <Nav/>
            <img src={logo} alt="logo" />
            <div className={s.info_block}>
                <p>Sales: <br />+1 (800) 315-5939</p>
                <BsGlobe2 className={s.icon_glob}/>
                <p>Search</p>
                <p>login</p>
            </div>
            <Button>Sign up</Button>
        </div>
    </header>
  )
}
