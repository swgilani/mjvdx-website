import React, {Component} from 'react'


class Button extends Component {

    render() {
        return(
            <div >
                <button
                type={this.props.type}
                name={this.props.name}
                className={this.props.className}
                required={this.props.required}
                onClick={this.props.onClick}
                >Submit</button>
            </div>

        )
    }
}

export default Button