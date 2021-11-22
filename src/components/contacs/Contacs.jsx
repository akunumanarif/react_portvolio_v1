import React, { useState } from 'react'
import "./contact.scss"

export default function Contacs() {

    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setMessage(true);
    }

    return (
        <div className="contact" id="contacts">
            <div className="left">
                <img src="assets/shake.svg" alt=""/>
            </div>
            <div className="right">
                <h2>Contact Me</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Email'/>
                    <textarea placeholder="Write some message ..."></textarea>
                    <button type="submit">Send</button>
                    {message && <span>Thank's I'll Replay ASAP</span>}
                </form>
            </div>
        </div>
    )
}
