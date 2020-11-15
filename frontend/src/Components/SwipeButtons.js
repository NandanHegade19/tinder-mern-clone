import React from 'react';
import '../Styles/SwipeButtons.css';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { IconButton } from '@material-ui/core';


function SwipeButtons() {
    return (
        <div className = "swipebuttons">
            <IconButton className = "repeat"><ReplayIcon fontSize = "large"/></IconButton>
            <IconButton className = "left"><CloseIcon fontSize = "large"/></IconButton>
            <IconButton className = "star"><StarIcon fontSize = "large"/></IconButton>
            <IconButton className = "right"><FavoriteIcon fontSize = "large"/></IconButton>
            <IconButton className = "lightning"><FlashOnIcon fontSize = "large"/></IconButton>
        </div>
    )
}

export default SwipeButtons;
