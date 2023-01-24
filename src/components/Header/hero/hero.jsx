import React from 'react'
import css from './Hero.module.scss'
const Hero = () => {
    return (
        <section className={`paddings ${css.wrapper}`}>
            <div className={`innerWidth ${css.container}`}>
                <div className={`${css.upperElements}`}></div>
                <span>Hey There, <br/> I'm Vikash Jha</span>
                <span>I design beautiful simple <br/> things, And i Love i do</span>
                <div className={`${css.lowerElements}`}></div>
                <div className={`${css.experience}`}>
                    <div className='primaryText'>10</div>
                    <div className='secondaryText'>
                        <div>
                            
                        </div>
                    </div>
                </div>
                <div className={`${css.certificate}`}></div>
            </div>
        </section>
    )
}

export default Hero