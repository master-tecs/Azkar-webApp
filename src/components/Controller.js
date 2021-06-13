import React from 'react'
import './Controller.css'
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Grid, Slider } from '@material-ui/core';

function Controller() {
    const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return (
        <div className="controller">
            <div className="controller__left">
                <SkipPreviousIcon className="controller__icons" />
                <PlayArrowIcon className="controller__icons action" />
                <SkipNextIcon className="controller__icons" />
            </div>
            <div className="controller__right">
                <div className="controller__right--left">
                    <VolumeDownIcon />
                    <div className="controller__detail">
                        <img src="https://upload.wikimedia.org/wikipedia/en/f/f4/Davido_-_A_Good_Time.png" alt="album" className="controller__right--img" />
                        <div className="controller__right--text">
                            <p className="controller__right--title">A Good Time</p>
                            <p className="controller__right--name">Davido</p>
                        </div>
                    </div>
                </div>
                <div className="controller__right--right">
                    <div className="controller__right--line">
                        <p className="controller__right--time">1:45</p>
                        <Grid item xs>
                            <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
                        </Grid>
                        <p className="controller__right--time">3:20</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Controller
