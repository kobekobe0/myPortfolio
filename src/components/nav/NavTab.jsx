import React from 'react'
import './nav.css'
import { Link } from 'react-router-dom'
import facebook from '../../images/f.png'
import instagram from '../../images/i.png'
import twitter from '../../images/t.png'
import ReactDom from 'react-dom'

function NavTab(props) {
    if (!props.isOpen) return null
    const path = ['Home', 'Projects', 'Gallery', 'About']
    return (
        <div className="tabs">
            <ul>
                {path.map((item, index) => (
                    <Link
                        key={index}
                        to={item === 'Home' ? `/` : `/${item}`}
                        onClick={props.setIsOpen}
                    >
                        {' '}
                        {item}
                    </Link>
                ))}
            </ul>

            <div className="socials">
                <h3>Socials</h3>
                <div className="socials-icons">
                    <a
                        href="https://www.facebook.com/KobeSantos24/"
                        target="_blank"
                        onClick={props.setIsOpen}
                    >
                        <img src={facebook} alt="facebook logo" />
                    </a>
                    <a
                        href="https://www.instagram.com/kobekoblanca/"
                        target="_blank"
                        onClick={props.setIsOpen}
                    >
                        <img src={instagram} alt="instagram logo" />
                    </a>
                    <a
                        href="https://twitter.com/kobekoblanca"
                        target="_blank"
                        onClick={props.setIsOpen}
                    >
                        <img src={twitter} alt="twitter logo" />
                    </a>
                </div>
            </div>

            <div className="copyright">
                <h3>kobe0santos0@gmail.com</h3>
                <h4>© 2022 by Kobe Brian Santos. Created with React v18.</h4>
            </div>
        </div>
    )
}

export default NavTab
