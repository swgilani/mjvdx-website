import React from 'react';
import './SideDrawer.css';
import { browserHistory } from "react-router";

const sideDrawer = props => {
let drawerClasses = 'side-drawer'
if (props.show){
    drawerClasses = 'side-drawer open';
}



const toLandscapes = () => browserHistory.push("/Landscapes");
const toPortraits = () => browserHistory.push("/Portraits");
const toWeddings = () => browserHistory.push("/Weddings");
const toEvents = () => browserHistory.push("/Events");
const toExperience = () => browserHistory.push("/Experience");
const toPackages = () => browserHistory.push("/Packages");
const toAbout = () => browserHistory.push("/About");
const toContact = () => browserHistory.push("/Contact");





    return (
<nav className = {drawerClasses}>

<ul className="fonts1">
    
<li><button className="tool-button" onClick={toLandscapes} >LANDSCAPES</button></li>
        <li><button className="tool-button" onClick={toPortraits}>PORTRAITS</button></li>
        <li><button className="tool-button" onClick={toWeddings}>WEDDINGS</button></li>
        <li><button className="tool-button" onClick={toEvents}>EVENTS</button></li>    
        <li> <button className="tool-button" onClick={toExperience}>THE EXPERIENCE</button></li>
                <li> <button className="tool-button" onClick={toPackages}>PACKAGES</button></li>
                <li> <button className="tool-button" onClick={toAbout}>ABOUT ME</button></li>
                <li><button className="tool-button" onClick={toContact}>CONTACT</button></li>  
    
</ul>

</nav>

    );
};

export default sideDrawer;
