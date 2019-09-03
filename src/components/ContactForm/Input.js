import React, {Component} from 'react'


class Input extends Component {

render () {

    return (
        <div className="form-group">
            <label htmlFor={this.props.name}></label>
            <input className="sizedinput"
            type={this.props.type}
            name={this.props.name}
            className={this.props.className}
            required={this.props.required}
            onChange={this.props.onChange}
            value={this.props.value}
            placeholder={this.props.placeholder}
            />

            <span className='error'>{this.props.error}</span>

        </div>
    )
    }
}


export default Input