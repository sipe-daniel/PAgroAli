import React from 'react'
import './Contact.css'

export default function Contact() {
    return (
        <div className="container-contact">
            <h1 className="contact">Contactez-nous</h1>
            <p>Notre email : blog@gmail.com</p>
            <p>Notre phone : xx-xx-xx-xx-xx</p>
            <p>Rejoignez-nous sur nos reseaux sociaux : 
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Youtube</li>
                </ul>
            </p>
        </div>
    )
}
