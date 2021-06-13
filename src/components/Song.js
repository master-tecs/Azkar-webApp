import React from 'react'
import  './Song.css'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function Song({img, name, num}) {
    return (
        <div className="song">
            <div className="song__left">
                <img src={img} alt="Song 1" className="song__img"/>
                <p className="song__num">{num}</p>
                <p className="song__name">{name}</p>
            </div>
            <div className="song__right">
                <p>3:24</p>
                <MoreHorizIcon className="song__icon" />
            </div>
        </div>
    )
}

export default Song
