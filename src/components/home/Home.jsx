import React from 'react'
import './home.css'
import pf from '../../images/p4.jpg'
import Typist from 'react-typist'
import '../../../node_modules/react-typist/dist/Typist.css'
import { BsFillCircleFill } from 'react-icons/bs'
import { GoPlus } from 'react-icons/go'
import FadeIn from 'react-fade-in'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className="home">
            <FadeIn className="sub">
                <sub>
                    <div className="three-dots">
                        <BsFillCircleFill
                            className="home-dot"
                            color="mediumseagreen"
                            size={15}
                        />
                        <BsFillCircleFill
                            className="home-dot"
                            color="sandybrown"
                            size={15}
                        />
                        <BsFillCircleFill
                            className="home-dot"
                            color="tomato"
                            size={15}
                        />
                    </div>
                    <div className="sub-img-hire">
                        <img src={pf} alt="Kobe Brian Santos" />
                        <Link to="/Contact">
                            <GoPlus style={{ marginRight: '0.3em' }} /> Hire me
                        </Link>
                    </div>

                    <h1>Stay tuned.</h1>
                    <Typist>
                        <h2>
                            <span style={{ color: '#843EA5' }}>const</span>{' '}
                            <span style={{ color: '#B8B45A' }}>name</span>{' '}
                            <span style={{ color: '#638CBD' }}>=</span>{' '}
                            <span style={{ color: '#4D9555' }}>'Kobe'</span>
                        </h2>
                        <h2>
                            <span style={{ color: '#843EA5' }}>let</span>{' '}
                            <span style={{ color: '#B8B45A' }}>tired</span>{' '}
                            <span style={{ color: '#638CBD' }}>=</span>{' '}
                            <span style={{ color: '#8F622C' }}>true</span>
                        </h2>
                        <h2>
                            <span style={{ color: '#843EA5' }}>let</span>{' '}
                            <span style={{ color: '#9E3434' }}>age</span>{' '}
                            <span style={{ color: '#638CBD' }}>=</span>{' '}
                            <span style={{ color: '#8F622C' }}>19</span>
                        </h2>

                        <h2>
                            <span style={{ color: '#843EA5' }}>let</span>{' '}
                            <span style={{ color: '#9E3434' }}>goal</span>{' '}
                            <span style={{ color: '#638CBD' }}>=</span>{' '}
                            <span style={{ color: '#4D9555' }}>'be happy'</span>
                            <Typist.Backspace count={10} delay={200} />
                            <span style={{ color: '#4D9555' }}>'survive'</span>
                        </h2>
                    </Typist>
                </sub>
            </FadeIn>
        </div>
    )
}

export default Home
