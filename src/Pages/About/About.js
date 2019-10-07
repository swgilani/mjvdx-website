import React, { Component } from 'react'
import Toolbar from '../../components/Toolbar/Toolbar'
import Parallax from '../../components/Parallax/AboutP'
import './About.css';
import ContactForm from '../../components/ContactForm/ContactForm'
import Footer from '../../components/Footer/Footer'
import Backdrop from '../../components/Backdrop/Backdrop'

import SideDrawer from '../../components/SideDrawer/SideDrawer'
import ReactDOM from 'react-dom';

class About extends Component {


  state = {
    sideDrawerOpen: false,
  }

 



  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen }
    })
  }

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false })
  }

  componentDidMount(){
    ReactDOM.findDOMNode(this).scrollIntoView();
    document.body.classList.add("MainPage");
    

}
  
    

  

    render() {

      let backdrop;
      if (this.state.sideDrawerOpen) {
        backdrop = <Backdrop click={this.backdropClickHandler} />;
      }
  
    
      return (
        
        <div className="backgroundAbout">

<Parallax />
<Toolbar drawerClickHandler={this.drawerToggleClickHandler} /> 
                   
                   <SideDrawer show={this.state.sideDrawerOpen} />
                   {backdrop}
<br/>
<div className="centerAbout">
<div className="centeredContainer">



<div className="seconditem">
<hr/>
<p>I’m a student at Ryerson University studying the fundamentals of electrical engineering. When my nose is not in textbooks, I’m often seen with a camera in my hand, clicking away! 

After my trip to Europe my passion for photography emerged. Photography to me is more than just taking a photo. It’s about capturing the emotion, witnessing the moment and writing a story in the form of art. 

I’ve made it my life’s mission to capture my client’s most special and beautiful moments in the form an image, an everlasting memory that they can cherish forever.

Some of my recent work can be seen on my facebook and instagram pages. 


</p>
<p>- Muneeb Javed</p>
<hr/>
</div>


</div>



</div>






<br/>
<ContactForm/>
<Footer/>
        </div>
        
      )
    }
  }


  export default About