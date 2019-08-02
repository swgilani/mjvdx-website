import React, { Component } from 'react'

import './Welcome.css';


class Welcome extends Component {
  
    onClick(){
        window.location.href= './MainPage'
    }

  

    render() {
    
      return (

        <div className = "container">

          <div id="button-container">
			     <p className="name">MJVDX</p>
           <br/>
           <br/>
           <br/>
           <h1 className="welcomeText">Welcome!</h1>
           <p className="title">Photographer based in Toronto</p>

            <button  onClick={this.onClick}>Enter</button>  
		      </div>

           
              
        </div>
      )
    }
  }

  export default Welcome