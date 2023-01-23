import React from 'react'
import css from './Header.module.scss'
import {BiPhoneCall} from 'react-icons/bi'
import '../../styles/global.scss'

const Header = () => {
  return (
    <div className={`paddings ${css.wrapper}`}>
        <div className={`flexCenter innerWidth ${css.container}`}>
            <div className={css.name}>
                Vikash Jha
            </div>
            <ul className={`flexCenter ${css.menu}`}>
                <li><a href=''>Services</a></li>
                <li><a href=''>Experience</a></li>
                <li><a href=''>Portfolio</a></li>
                <li><a href=''>Testimonial</a></li>
                <li className={`flexCenter ${css.phone}`}>
                    <p>7610875160</p>
                    <BiPhoneCall size ={"40px"}/>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header