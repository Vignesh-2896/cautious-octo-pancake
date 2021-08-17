import React from 'react';
import GeneralInfo from './GeneralInfo';
import Education from './Education';
import Work from './Work';


function MainForm(){

    const divStyle = {
        width:"60%",
        margin:"70px auto 0px auto",
        border:"1px solid black",
        textAlign:"center",
    }

    return (
        <div style = {divStyle} >
            <form>
                <GeneralInfo/>
                <Education/>
                <Work/>
            </form>
        </div>
    )

}

export {MainForm};