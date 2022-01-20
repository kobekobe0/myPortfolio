import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import './nav.css'
import NavTab from '../nav/NavTab'
import Slide from 'react-reveal/Slide'

function Nav() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="nav">
            <GiHamburgerMenu
                size={30}
                onClick={() => setIsOpen(true)}
                className="hamburger"
                color="white"
                style={{
                    backgroundColor: 'black',
                    padding: '10px',
                    borderRadius: '10%',
                }}
            />

            <NavTab isOpen={isOpen} setIsOpen={() => setIsOpen(false)} />
        </div>
    )
}

export default Nav
