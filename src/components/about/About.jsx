import React from 'react'
import './about.css'
import face from '../../images/face.jpg'
import face3 from '../../images/face3.jpg'
import face2 from '../../images/ttt.jpg'
import firebase from '../../images/firebase.png'
import git from '../../images/gut.png'
import html from '../../images/html.png'
import css from '../../images/css.png'
import js from '../../images/js.png'
import react from '../../images/react.png'
import python from '../../images/python.png'
import apollo from '../../images/apollo.png'
import graphql from '../../images/graphql.png'
import tailwind from '../../images/tailwind.png'
import apollo from '../../images/apollo.png'
import mongo from '../../images/mongo.png'
import node from '../../images/node.png'
import express from '../../images/express.png'
import postman from '../../images/postman.png'
import { RiTeamFill } from 'react-icons/ri'
import { BsKeyboard } from 'react-icons/bs'
import {
    SiAdobepremierepro,
    SiAdobephotoshop,
    SiMicrosoftword,
    SiMicrosoftexcel,
} from 'react-icons/si'
import adventure from '../../images/interests/adventure.png'
import food from '../../images/interests/food.png'
import invest from '../../images/interests/invest.png'
import programming from '../../images/interests/programming.png'
import staring from '../../images/interests/staring.png'
import watching from '../../images/interests/watching.png'
import workout from '../../images/interests/workout.png'
import FadeIn from 'react-fade-in'
import ScrollAnimation from 'react-animate-on-scroll'

function About() {
    return (
        <div className="about">
            <div className="about-content-wrapper">
                <div className="about-content">
                    <FadeIn className="about-img">
                        <img src={face3} alt="" />
                    </FadeIn>

                    <div className="introduction">
                        <h2>Hello,</h2>
                        <p>
                            Kobe Brian Santos, 19-year-old college student based
                            in the Philippines. I'm an aspiring web developer
                            and a self-taught programmer. I'm currently learning
                            full stack development, I mainly use MERN stack when
                            developing web apps.
                            <br />
                            <br />
                            The thing I love most about coding is that there’s
                            always something new to learn so it’s impossible to
                            get bored. There’s so many ways to be creative and
                            so many different problems to solve and I thrive on
                            the challenge. I am currently looking for frontend
                            or backend web development internships.
                        </p>
                    </div>

                    <div className="skills">
                        <h2>Skills</h2>
                        <div className="technical-skills">
                            <h3>Technical Skills</h3>
                            <div className="technical-skills-icons">
                                <img src={js} alt="javascript" />
                                <img src={react} alt="reactJS" />
                                <img src={node} alt="nodeJS" />
                                <img src={express} alt="expressJS" />
                                <img src={graphql} alt="graphQL" />
                                <img src={apollo} alt="apollo" />
                                <img src={html} alt="html" />
                                <img src={css} alt="css" />
                                <img src={tailwind} alt="Tailwind css" />
                                <img src={python} alt="" />
                                <img src={firebase} alt="" />
                                <img src={mongo} alt="" />
                                <img src={git} alt="" />
                                <img src={postman} alt="" />
                            </div>
                        </div>
                        <div className="stack">
                            <h3>Most used stack</h3>
                            <div className="stack-icons">
                                <img src={mongo} alt="" />
                                <img src={express} alt="" />
                                <img src={react} alt="" />
                                <img src={node} alt="" />
                            </div>
                        </div>
                        <div className="other">
                            <h3>Other</h3>
                            <div className="other-icons">
                                <div className="photoshop">
                                    <SiAdobephotoshop size={90} />
                                    <h4>Photo Editing</h4>
                                </div>
                                <div className="premeire">
                                    <SiAdobepremierepro size={90} />
                                    <h4>Video Editing</h4>
                                </div>
                                <div className="ms-word">
                                    <SiMicrosoftword size={90} />
                                    <h4>MS Word</h4>
                                </div>
                                <div className="ms-excel">
                                    <SiMicrosoftexcel size={90} />
                                    <h4>MS Excel</h4>
                                </div>
                                <div className="type-speed">
                                    <BsKeyboard size={90} />
                                    <h4>65wpm | 100% acc.</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="interests">
                        <div className="interests-wrapper">
                            <h3>Interests</h3>
                            <div className="interest-card-wrapper">
                                <ScrollAnimation
                                    animateIn="fadeInLeft"
                                    animateOnce
                                    duration={0.5}
                                    className="interests-card"
                                >
                                    <img src={programming} alt="" />
                                    <div>
                                        <h4>Technology</h4>
                                        <p>
                                            Aiming to contribute in someway in
                                            this
                                            <br /> field.
                                        </p>
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation
                                    animateIn="fadeInRight"
                                    duration={0.5}
                                    animateOnce
                                    className="interests-card"
                                >
                                    <img src={watching} alt="" />
                                    <div>
                                        <h4>Watching Shows</h4>
                                        <p>
                                            A great way to waste your time.{' '}
                                            Especially <br /> anime.
                                        </p>
                                    </div>
                                </ScrollAnimation>

                                <ScrollAnimation
                                    animateIn="fadeInRight"
                                    duration={0.5}
                                    animateOnce
                                    className="interests-card"
                                >
                                    <img src={food} alt="" />
                                    <div>
                                        <h4>Food</h4>
                                        <p>I mean, who doesn't?</p>
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation
                                    animateIn="fadeInLeft"
                                    duration={0.5}
                                    animateOnce
                                    className="interests-card"
                                >
                                    <img src={invest} alt="" />
                                    <div>
                                        <h4>Personal Finance</h4>
                                        <p>
                                            Planning is meh, but it is needed.
                                        </p>
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation
                                    animateIn="fadeInRight"
                                    duration={0.5}
                                    animateOnce
                                    className="interests-card"
                                >
                                    <img src={staring} alt="" />
                                    <div>
                                        <h4>Starry Sky</h4>
                                        <p>Relaxation at its finest.</p>
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation
                                    animateIn="fadeInLeft"
                                    duration={0.5}
                                    animateOnce
                                    className="interests-card"
                                >
                                    <img src={adventure} alt="" />
                                    <div>
                                        <h4>Adventures</h4>
                                        <p>
                                            Don't wanna die just stuck where I
                                            am.
                                        </p>
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation
                                    animateIn="fadeInLeft"
                                    duration={0.5}
                                    animateOnce
                                    className="interests-card"
                                >
                                    <img src={workout} alt="" />
                                    <div>
                                        <h4>Working Out</h4>
                                        <p>
                                            More like forced by my inner self.
                                            <br />
                                            But being toned is great.
                                        </p>
                                    </div>
                                </ScrollAnimation>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer
                style={{
                    height: '20rem',
                    fontFamily: 'Roboto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 'auto',
                    fontSize: '1.3rem',
                    backgroundColor: 'rgb(8, 4, 19, 0.9)',
                    color: 'white',
                }}
            >
                <p>© 2022 by Kobe Brian Santos. Created with React.</p>
            </footer>
        </div>
    )
}

export default About
