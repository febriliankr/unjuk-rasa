import React from 'react'
import './Start.css'
import { Button } from '../../Button'
import { Link } from 'react-router-dom'

function Start() {
    return (
        <div className="container">
            <h1>Unjuk Rasa</h1>
            <img src="white-logo.png" alt="unjuk rasa" className="image__logo"></img>
            <Link to='/buku-tamu'><Button buttonStyle='btn--subtle'>Mulai</Button></Link>
        </div>
    )
}

export default Start