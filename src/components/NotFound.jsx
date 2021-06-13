import React from 'react'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function NotFound({history}) {
    return (
        
        <div className="azkar">
            <div className="azkar__head">
                <div className="btm__skipIcon" onClick={() => history.push("/")}>
                    <ArrowBackIcon className="btm__skipIcon--back" />
                </div>
            </div>
            <div className="azkar__Done">
                <h1>404 Page Not Found</h1>
            </div>
        </div>
    )
}

export default NotFound
