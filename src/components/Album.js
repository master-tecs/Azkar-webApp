import React from 'react'
import './Album.css'

function Album({img, title, name}) {
    return (
        <div className="album">
            <img src={img} alt="" className="album__img"/>
            <p className="album__title">{title}</p>
            <p className="album__name">{name}</p>
        </div>
    )
}

export default Album
