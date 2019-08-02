import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => {
let drawerClasses = 'side-drawer'
if (props.show){
    drawerClasses = 'side-drawer open';
}



    return (
<nav className = {drawerClasses}>

<ul className="fonts1">
    
    <li> <a href="/">LANDSCAPES</a> </li>
    <li><a href="/">PORTRAITS</a>   </li>
    <li><a href="/">WEDDINGS</a>  </li> 
    <li><a href="/">EVENTS</a>  </li> 
    <li><a href="/">THE EXPERIENCE</a></li>
    <li><a href="/">PACKAGES</a></li>
    <li> <a href="/">ABOUT ME</a> </li>    
    <li> <a href="/">CONTACT</a> </li>     
    
</ul>

</nav>

    );
};

export default sideDrawer;
