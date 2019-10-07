import React from 'react';
import './SideDrawer.css';
import { browserHistory } from "react-router";
import { Link } from 'react-router-dom'

const sideDrawer = props => {
let drawerClasses = 'side-drawer'
if (props.show){
    drawerClasses = 'side-drawer open';
}








    return (
<nav className = {drawerClasses}>

<ul className="fonts1">

      <Link to='/Landscapes'>
      <li><button className="tool-button">LANDSCAPES</button></li> 
        </Link>
        <Link to='/Portraits'>
        <li><button className="tool-button">PORTRAITS</button></li>
        </Link>
        <Link to='/Weddings'>
        <li><button className="tool-button">WEDDINGS</button></li>
        </Link>

        <Link to='Events'>
        <li><button className="tool-button">EVENTS</button></li>    
        </Link>

      <Link to='/Packages'>
                <li> <button className="tool-button">PACKAGES</button></li>
                </Link>
                <Link to='/About'>
                <li> <button className="tool-button">ABOUT ME</button></li>
                </Link>
                <Link to='/FAQ'>
                <li> <button className="tool-button">FAQ</button></li>
                </Link>
                <Link to='/Contact'>
                <li><button className="tool-button">CONTACT</button></li>
                </Link>
    
</ul>

</nav>

    );
};

export default sideDrawer;
