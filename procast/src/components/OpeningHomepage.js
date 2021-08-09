import React from "react";
import IntroPage from "../images/introPage.svg";
import { Link } from "react-router-dom";
 
const OpeningHomepage = props => {

  return (
    <Link to='/login'>
        <div>
            <img className="centreHomepage" src={IntroPage} alt="Our entire homepage"/>
        </div>
    </Link>
    
  );
};
 
export default OpeningHomepage;