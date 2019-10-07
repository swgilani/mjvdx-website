import React, { Component } from 'react'
import toastr from 'toastr'
import Input from './Input'
import TextArea from './TextArea'
import Button from './Button'
import * as emailjs from 'emailjs-com'
import 'jquery'
import './ContactForm.css'


class ContactForm extends Component {

constructor (props) {
super(props)

this.state = {
    name: '',
    email: '',
    subject: '',
    message: '',
    errors: {
        name: '',
        email: '',
        subject: '',
        message: ''

        }
    }
}




handleInputChange(event) {
    event.preventDefault()
    const target = event.target
    const name = target.name
    const value = target.value
    this.setState({[name]: value})
    
}

validateMail() {

    let errors = {}
    let formIsValid = true

    if (!this.state.name || this.state.name.length < 3){
        errors.name = 'Invalid name'
        formIsValid = false
    }

    if (!this.state.subject || this.state.subject.length < 3){
        errors.subject = 'Invalid subject'
        formIsValid = false
    }

    if (!this.state.message || this.state.message.length < 10){
        errors.message = 'Message too short'
        formIsValid = false
    }

    if (!this.state.email || this.state.email.length < 3){
        errors.email = 'Invalid email'
        formIsValid = false
    }

    let pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/


    if (!pattern.test(this.state.email)) {
        errors.email = 'Invalid email'
        formIsValid = false
    }

    this.setState({
        errors: errors
    })

    return formIsValid
}

sentMessage (event) {
    event.preventDefault()

    if (!this.validateMail()){
        return
    }

    toastr.options = {
        "closeButton": true,
        "debug": true,
        "newestOnTop": false,
        "progressBar": true,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "300",
        "hideDuration": "1000",
        "timeOut": "5000",
        "extendedTimeOut": "1000",
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
      }

var templateParams = {
from_name: this.state.name + '(' + this.state.email + ')',
to_name: 'iwasiqiqbal@gmail.com',
subject: this.state.subject,
message_html: this.state.message
}






emailjs.send('gmail', 'template_AhrNCN0m', templateParams,'user_y1idf3M2zgdLN1kX8La0n')
.then(function (response) {
    
      toastr.success("Message sent Successfully!")
      
    console.log('SUCCESS!', response.status, response.text)
}, function (err) {

    toastr["error"]("Muneeb will contact you back shortly.", "Message sent successfully!")
    console.log(err)
})


this.setState({
    name: '',
    email: '',
    subject: '',
    message: ''
})

}





render () {

return (

    <div className="hero-image">


<div className="hero-image-inner">

    <h1 className="contact-textMAIN"> 
      Contact Me
        
    </h1>
    
       


    <div className="hero-inside flex-direkshan">

    <div className="div1contact">
        <h1 className="contact-text2">Let's chat!
         </h1>
       <a href="https://www.instagram.com/mjvdx/"> <i className="fab fa-instagram fa-5x contact-text2 icon-contact1" > </i></a> 
       <a href="https://www.facebook.com/mjvdx/"><i className="fab fa-facebook-f fa-5x contact-text2 icon-contact2" > </i></a> 
        
    </div>


    <div className="div2contact">

    <form

    id={this.props.id}
    className={this.props.className}
    name={this.props.name}
    method={this.props.method}
    action={this.props.action}
    
    >

    <Input
    type='text'
    placeholder="Name"
     name="name"
    className='form-control'
    required='required' onChange={this.handleInputChange.bind(this)}
    value={this.state.name}
    error={this.state.errors.name}
    />

    
    

      <Input
    type='email'
    name='email'
    placeholder="Email"
    className='form-control'
    required='required'
    onChange={this.handleInputChange.bind(this)}
    value={this.state.email}
    error={this.state.errors.email}
    />

      <Input
    type='text'
    name='subject'
    placeholder="Subject"
    className='form-control'
    required='required' 
    onChange={this.handleInputChange.bind(this)}
    value={this.state.subject}
    error={this.state.errors.subject}
    />
 
    <TextArea
    name='message'
    placeholder="Message"
    id='message'
    className='form-control'
    required='required' 
    rows='8'
    onChange={this.handleInputChange.bind(this)}
    value={this.state.message}
    error={this.state.errors.message}
    />
     <hr className="bruhhr"/>
    <Button
    onClick={this.sentMessage.bind(this)}
    type='button'
    name='submit'
    className='btn-contact'
    required='required' 
    />


</form>
</div>
</div>
</div>
</div>

)
}
}



export default ContactForm