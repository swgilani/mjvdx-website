import React from 'react';
import './SideDrawer.css';

const sideDrawer = props => {
let drawerClasses = 'side-drawer'
if (props.show){
    drawerClasses = 'side-drawer open';
}



    return (
<nav className = {drawerClasses}>

<ul>
    
    <li> <a href="/">Landscapes</a> </li>
    <li><a href="/">Portraits</a>   </li>
    <li><a href="/">Weddings</a>  </li> 
    <li><a href="/">Events</a>  </li> 
    <li><a href="/">The Experience</a></li>
    <li><a href="/">Packages</a></li>
    <li> <a href="/">About me</a> </li>    
    <li> <a href="/">Contact</a> </li>     
    
</ul>

</nav>

    );
};

export default sideDrawer;
