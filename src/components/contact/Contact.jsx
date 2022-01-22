import React, { useState } from 'react'
import FadeIn from 'react-fade-in'
import emailjs from '@emailjs/browser'
import './contact.css'

function Contact() {
    const [message, setMessage] = useState('')
    const [alert, setAlert] = useState(false)
    const Submit = (e) => {
        e.preventDefault()

        if (message !== '') {
            emailjs
                .sendForm(
                    'service_52ozxzu',
                    'template_kvlolgv',
                    e.target,
                    'user_68efs3XOjmgTWgffSteJd'
                )
                .then((res) => console.log(res))
                .then(() => {
                    e.target.reset()
                })
                .catch((err) => console.log(err))
        } else {
            setAlert(true)
            setTimeout(() => {
                setAlert(false)
            }, 2000)
        }
    }
    return (
        <FadeIn>
            {alert && (
                <div className="alert-contact-wrapper">
                    <div className="alert-contact">
                        Please complete the form before submitting.
                    </div>
                </div>
            )}
            <div className="contact">
                <div className="contact-wrapper">
                    <form onSubmit={Submit}>
                        <input type="text" placeholder="Name" name="name" />

                        <input type="email" placeholder="Email" name="email" />

                        <input
                            type="text"
                            placeholder="Subject"
                            name="subject"
                        />

                        <textarea
                            name="message"
                            id=""
                            placeholder="Message"
                            name="message"
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div>{' '}
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
        </FadeIn>
    )
}

export default Contact
