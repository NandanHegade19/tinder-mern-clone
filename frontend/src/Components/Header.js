import React from 'react';
import '../Styles/Header.css';
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import TinderCards from './TinderCards';


function Header() {
    return (
        <div className = "header">
            <IconButton><PersonIcon fontSize = "large" className = "personicon"/></IconButton>
            <img src = "https://1000logos.net/wp-content/uploads/2018/07/tinder-logo-500x281.png" alt="" className = "tinderlogo"/>
            <IconButton><ForumIcon fontSize = "large" className = "forumicon"></ForumIcon></IconButton>
        </div>
    )
}

export default Header;