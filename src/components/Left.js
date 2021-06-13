import React from 'react'
import './Left.css'
import ExploreIcon from '@material-ui/icons/Explore';
import TimelineIcon from '@material-ui/icons/Timeline';
import SurroundSoundIcon from '@material-ui/icons/SurroundSound';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AlbumIcon from '@material-ui/icons/Album';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import ViewStreamIcon from '@material-ui/icons/ViewStream';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

function Left() {
    return (
        <div className="left">
            {/* left__app */}
            <div className="left__app">
                <p className="left__app--title">
                    <p  className="header">App</p> 
                </p>
                <div className="left__app--list active">
                    {/* icon */}
                    <ExploreIcon />
                    <p className="subHeader">Explore</p> 
                </div>
                <div className="left__app--list">
                    <SurroundSoundIcon />
                    <p>Sugestion</p>
                </div>
                <div className="left__app--list">
                    <TimelineIcon />
                    <p>Top Charts</p> 
                </div>
                <div className="left__app--list">
                    <MusicVideoIcon />
                    <p>New Stuff</p> 
                </div>
            </div>
            {/* left__personal */}
            <div className="left__personal">
                <div className="left__personal--top">
                    <p className="left__app--title">
                        <p>Personal</p> 
                    </p>
                    <div className="left__app--list">
                        {/* icon */}
                        <FavoriteIcon />
                        <p>Favorite</p> 
                    </div>
                    <div className="left__app--list">
                        <AlbumIcon />
                        <p>Albums</p>
                    </div>
                    <div className="left__app--list">
                        <QueueMusicIcon />
                        <p>Playlists</p> 
                    </div>
                    <div className="left__app--list">
                        <ViewStreamIcon />
                        <p>Gendres</p> 
                    </div>
                </div>
                {/* bottom */}
                <div className="left__personal--bottom">
                    <PlaylistAddIcon />
                    <p>Create laylist</p>
                </div>
            </div>
        </div>
    )
}

export default Left
