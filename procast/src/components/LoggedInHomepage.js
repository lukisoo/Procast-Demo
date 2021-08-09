import React from 'react';
import LoggedInHomepageImg from '../images/loggedInHomepage.svg';


const LoggedInHomepage = (props) => {
        
    return (
        <div style={{width: "100%", paddingTop: "1%", display: "flex", justifyContent: "center"}}>
            <img src={LoggedInHomepageImg}/>
        </div>
    );
};

export default LoggedInHomepage;
