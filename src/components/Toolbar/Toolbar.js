import React from 'react';
import './Toolbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
const toolbar = props => (
<header className="toolbar">
    
    <nav className="toolbar_navigation">
        <div className="toolbar__toggle-button">
            <DrawerToggleButton click={props.drawerClickHandler} />
        </div>

        
        <div className="toolbar_navigation-items1">
            <ul>        
        <li><a href="/">Landscapes</a></li>
        <li><a href="/">Portraits</a></li>
        <li><a href="/">Weddings</a></li>
        <li><a href="/">Events</a></li>    
            </ul>
        </div>
        
        <div className="spacer" />
        <div className="toolbar_logo"><a href='/'>MJVDX</a></div>
        <div className="spacer" />
        <div className="toolbar_navigation-items2">
            <ul>
                
                <li> <a href="/">The Experience</a></li>
                <li> <a href="/">Packages</a></li>
                <li> <a href="/">About Me</a></li>
                <li> <a href="/">Contact</a></li>
                
            </ul>
        </div>
    </nav>
   
</header>
);

export default toolbar;