import React, { useState } from 'react'
import chevronUp from "../assets/ChevronUp.png"
import chevronDown from "../assets/ChevronDown.png"
import "../css/Collapse.css"



function Collapse({title, content}) {
    // défini le collapse par défaut comme fermé
    const [contentVisible, setContentVisible] = useState(false)

    // à chaque clic sur le collapse, ca inverse la valeur pour le ouvert/fermé
    const affContent = () => { 
        setContentVisible(!contentVisible) // inverse la valeur actuelle
    }

    // défini les classes selon si c'est visible ou caché, idem pour le chevron
    const collapseContent = (contentVisible ? "visible" : "hidden") + " collapse"
    const collapseChevron = (contentVisible ? chevronUp : chevronDown)

    return (
        <div className='collapse'>

            {/* affiche le titre et le chevron */}
            <div className='collapse-header' onClick={affContent}>
                <span>{title}</span>
                <div className="chevron-value">
                    <img src={collapseChevron} alt="" aria-hidden="true"/>
                </div>
            </div>

            {/* affiche le contenu */}
            <div className={collapseContent}>
                <ul>{content}</ul>
            </div>
        </div>
    )
}

export default Collapse