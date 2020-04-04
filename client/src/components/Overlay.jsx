import React from 'react';

export default function Overlay({display,keyword, handleClick}){
    var handleExit = () => {
        handleClick('');
    };

    if(display === 'join' || display === 'feedback'){
        console.log('Displaying overlay!');
        return(
            <div id='overlay' onClick={handleExit}></div>
        )
    }
    else if((display === 'search') && (keyword.length > 1)){
        return(
            <div id='partial-overlay' onClick={handleExit}></div>
        )
    }
    else{
        return null;
    }
}