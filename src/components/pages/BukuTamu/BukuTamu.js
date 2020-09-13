import React from 'react'
import './BukuTamu.css'
import { Button } from '../../Button'
import { Link } from 'react-router-dom'

function BukuTamu() {
    const handleSubmit = () => {


    }

    return (
        <div className="container">
            <h1>Buku Tamu</h1>
            <form className="register-form" onSubmit={handleSubmit}>
                <input name="name" type="name" placeholder="Nama Lengkap" className="register-input"/>
                <input name="email" type="email" placeholder="E-Mail" className="register-input"/>
                <Button buttonStyle='btn--subtle'>Selanjutnya</Button>
            </form>
        </div>
    )
}

export default BukuTamu
