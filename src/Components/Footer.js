import React from 'react';

function Footer(){

    const divStyle = {
        width:"100%",
        position:"fixed",
        left:"0",
        right:"0",
        bottom:"0",
        textAlign:"center",
        backgroundColor:"gray",
    };

    return (
        <div style = {divStyle} className = "footer">
            <h4>Built by Vignesh B ! !</h4>
        </div>
    )
}

export {Footer}