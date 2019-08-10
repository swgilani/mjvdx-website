import React, { Component } from 'react'
import Toolbar from '../../components/Toolbar/Toolbar'
import Parallax from '../../components/Parallax/LandscapeP'
import PhotosGrid from '../../components/PhotosGrid/PhotosGrid'
import './Landscapes.css';


class Landscapes extends Component {
  
    

  

    render() {
    
      return (

        <div>

<Parallax />
<Toolbar/>
<br/>

<PhotosGrid/>

        </div>
      )
    }
  }


  export default Landscapes