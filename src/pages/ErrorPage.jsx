import React from 'react'
import { Link } from "react-router-dom"


import "../css/ErrorPage.css"

function ErrorPage() {
    return (
                <div className='error commun-error'>
                    <span>404</span>
                    <h4>Oups! La page que vous demandez n'existe pas.</h4>
                    <p><Link to="/">Retourner sur la page d’accueil</Link></p>
                </div>
    )
}

export default ErrorPage