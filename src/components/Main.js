import { Avatar } from '@material-ui/core'
import React from 'react'
import './Main.css'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import SearchIcon from '@material-ui/icons/Search';
import Exlopre from './Exlopre';
import Song from './Song';
import Album from './Album';

function Main() {
    return (
        <div className="main">
            {/* MainTop */}
            <div className="main__top">
                <div className="main__top--left">
                    {/* icons */}
                    <ArrowBackIosIcon className="backIcon" />
                    <ArrowForwardIosIcon className="forwardIcon" />
                    <SearchIcon className="searchIcon" />
                    <p>Search music</p>
                </div>
                <div className="main__top--right">
                    <Avatar alt="Master_tech" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                    <p>Master_tecs</p>
                </div>
            </div>
            {/* new */}
            <h2 className="exploreHeder">Expore new</h2>
            <Exlopre />
            
            <div className="main__bottom">
                <div className="popular">
                    <h2>Popular</h2>
                    <Song img="https://i.pinimg.com/736x/d2/0c/db/d20cdb2e5f2e15919582e1d70c6e2914.jpg" name="As e dey go" num="1" />
                    <Song num="2" name="A Good Time" img="https://upload.wikimedia.org/wikipedia/en/f/f4/Davido_-_A_Good_Time.png" />
                    <Song num="3" name="Story that touch" img="https://i.pinimg.com/originals/51/1d/33/511d33486514675f98c99deb3450046a.jpg" />
                    <Song num="4" name="Cool Coder" img="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/cool-album-cover-design-template-e73832ea885bca31d2a3c58c8d5c3dcf.jpg?ts=1561542673" />
                    {/* <Song num="5" name="49-99" img="https://justnaija.com/uploads/2019/09/Tiwa-Savage-49-99-album.jpg" /> */}
                </div>
                <div className="lastest">
                    <h2>Trending album</h2>
                    <div className="lastest__top">
                        <Exlopre />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
