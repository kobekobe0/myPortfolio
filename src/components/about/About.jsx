import React from 'react'
import './about.css'
import face from '../../images/face.jpg'
import face3 from '../../images/face3.jpg'
import face2 from '../../images/ttt.jpg'
import firebase from '../../images/firebase.png'
import html from '../../images/html.png'
import css from '../../images/css.png'
import js from '../../images/js.png'
import react from '../../images/react.png'
import python from '../../images/python.png'
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
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Odio asperiores itaque nostrum animi
                            voluptatum quas excepturi dignissimos sapiente, fuga
                            assumenda. Nobis a eaque aspernatur labore fuga
                            consectetur delectus corrupti, iure quaerat
                            explicabo esse ducimus nulla alias quisquam ipsam
                            libero laboriosam blanditiis culpa obcaecati nisi
                            illo ullam? Delectus alias vero consectetur. Eaque
                            tenetur mollitia fuga error ad accusamus temporibus
                            nam, perspiciatis earum hic aperiam distinctio illum
                            ab explicabo? Quia, eaque voluptatem natus dicta
                            autem reprehenderit sit molestiae laborum sequi,
                            voluptatum ipsa animi dolore vitae quis a! Dicta
                            dolor aliquam laboriosam rem tempore ipsum
                            praesentium vitae dolorem quisquam iure ipsa quos
                            nostrum unde consequuntur doloribus itaque ad,
                            aliquid ducimus impedit cum nihil deleniti ipsam in
                            ut! Corrupti esse veritatis soluta quod rem!
                            <br />
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Omnis eum cumque distinctio amet molestias nam
                            nostrum, a modi tenetur nisi quo facere et ex atque
                            nesciunt, aliquid, neque magni. Enim quis, odit
                            magni repellat alias porro sint, pariatur ducimus
                            culpa ad nostrum, voluptatum consectetur itaque
                            adipisci dicta dolorem ipsam blanditiis!
                        </p>
                    </div>

                    <div className="skills">
                        <h2>Skills</h2>
                        <div className="technical-skills">
                            <h3>Technical Skills</h3>
                            <div className="technical-skills-icons">
                                <img src={html} alt="" />
                                <img src={css} alt="" />
                                <img src={js} alt="" />
                                <img src={react} alt="" />
                                <img src={python} alt="" />
                                <img src={firebase} alt="" />
                            </div>
                        </div>
                        <div className="stack">
                            <h3>Most used stack</h3>
                            <div className="stack-icons">
                                <img src={react} alt="" />
                                <img src={firebase} alt="" />
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
                                    <h4>55wpm | 98% acc.</h4>
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
                                    duration={0.5}
                                    className="interests-card"
                                >
                                    <img src={programming} alt="" />
                                    <div>
                                        <h4>Technology</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Aut
                                            atque sit sunt! Corporis, explicabo
                                            commodi iste fuga ab, voluptate quam
                                            aspernatur neque repudiandae unde
                                            inventore tenetur tempora ad nostrum
                                            architecto doloremque, sint nobis
                                            reprehenderit at. Repudiandae, ea
                                            quis corrupti totam repellat
                                            molestias, veniam reiciendis
                                            praesentium accusantium itaque quos
                                            culpa ut.
                                        </p>
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation
                                    animateIn="fadeInRight"
                                    duration={0.5}
                                    className="interests-card"
                                >
                                    <img src={watching} alt="" />
                                    <div>
                                        <h4>Watching Shows</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Aut
                                            atque sit sunt! Corporis, explicabo
                                            commodi iste fuga ab, voluptate quam
                                            aspernatur neque repudiandae unde
                                            inventore tenetur tempora ad nostrum
                                            architecto doloremque, sint nobis
                                            reprehenderit at. Repudiandae, ea
                                            quis corrupti totam repellat
                                            molestias, veniam reiciendis
                                            praesentium accusantium itaque quos
                                            culpa ut.
                                        </p>
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation
                                    animateIn="fadeInLeft"
                                    duration={0.5}
                                    className="interests-card"
                                >
                                    <img src={workout} alt="" />
                                    <div>
                                        <h4>Working Out</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Aut
                                            atque sit sunt! Corporis, explicabo
                                            commodi iste fuga ab, voluptate quam
                                            aspernatur neque repudiandae unde
                                            inventore tenetur tempora ad nostrum
                                            architecto doloremque, sint nobis
                                            reprehenderit at. Repudiandae, ea
                                            quis corrupti totam repellat
                                            molestias, veniam reiciendis
                                            praesentium accusantium itaque quos
                                            culpa ut.
                                        </p>
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation
                                    animateIn="fadeInRight"
                                    duration={0.5}
                                    className="interests-card"
                                >
                                    <img src={food} alt="" />
                                    <div>
                                        <h4>Food</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Aut
                                            atque sit sunt! Corporis, explicabo
                                            commodi iste fuga ab, voluptate quam
                                            aspernatur neque repudiandae unde
                                            inventore tenetur tempora ad nostrum
                                            architecto doloremque, sint nobis
                                            reprehenderit at. Repudiandae, ea
                                            quis corrupti totam repellat
                                            molestias, veniam reiciendis
                                            praesentium accusantium itaque quos
                                            culpa ut.
                                        </p>
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation
                                    animateIn="fadeInLeft"
                                    duration={0.5}
                                    className="interests-card"
                                >
                                    <img src={invest} alt="" />
                                    <div>
                                        <h4>Personal Finance</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Aut
                                            atque sit sunt! Corporis, explicabo
                                            commodi iste fuga ab, voluptate quam
                                            aspernatur neque repudiandae unde
                                            inventore tenetur tempora ad nostrum
                                            architecto doloremque, sint nobis
                                            reprehenderit at. Repudiandae, ea
                                            quis corrupti totam repellat
                                            molestias, veniam reiciendis
                                            praesentium accusantium itaque quos
                                            culpa ut.
                                        </p>
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation
                                    animateIn="fadeInRight"
                                    duration={0.5}
                                    className="interests-card"
                                >
                                    <img src={staring} alt="" />
                                    <div>
                                        <h4>Starry Sky</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Aut
                                            atque sit sunt! Corporis, explicabo
                                            commodi iste fuga ab, voluptate quam
                                            aspernatur neque repudiandae unde
                                            inventore tenetur tempora ad nostrum
                                            architecto doloremque, sint nobis
                                            reprehenderit at. Repudiandae, ea
                                            quis corrupti totam repellat
                                            molestias, veniam reiciendis
                                            praesentium accusantium itaque quos
                                            culpa ut.
                                        </p>
                                    </div>
                                </ScrollAnimation>
                                <ScrollAnimation
                                    animateIn="fadeInLeft"
                                    duration={0.5}
                                    className="interests-card"
                                >
                                    <img src={adventure} alt="" />
                                    <div>
                                        <h4>Adventures</h4>
                                        <p>
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Aut
                                            atque sit sunt! Corporis, explicabo
                                            commodi iste fuga ab, voluptate quam
                                            aspernatur neque repudiandae unde
                                            inventore tenetur tempora ad nostrum
                                            architecto doloremque, sint nobis
                                            reprehenderit at. Repudiandae, ea
                                            quis corrupti totam repellat
                                            molestias, veniam reiciendis
                                            praesentium accusantium itaque quos
                                            culpa ut.
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
                <p>© 2022 by Kobe Brian Santos. Created with React v18.</p>
            </footer>
        </div>
    )
}

export default About
