import React, { Component } from 'react'
import Toolbar from '../../components/Toolbar/Toolbar'
import Parallax from '../../components/Parallax/PackagesP'
import Image1 from '../../assets/images/muneeb.jpg';
import './Packages.css';
import ContactForm from '../../components/ContactForm/ContactForm'
import Footer from '../../components/Footer/Footer'


class About extends Component {
  
    

  

    render() {
    
      return (

        <div className="backgroundPackages">
<Parallax />
<Toolbar/>



<br/>
<ContactForm/>
<Footer/>
        </div>
      )
    }
  }


  export default About