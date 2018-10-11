import React, { Component } from 'react';
import imgBitCoin from '../../assets/icons/bitcoin.png'
import UserService from '../../services/UserService'
import './SignUp.css'

class SignUp extends Component {
    state = {
        userName: ''
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = event.target.value;
        this.setState({
            userName: value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();        
        UserService.signUp(this.state.userName)
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="SignUp">
                <img src={imgBitCoin} alt="BitCoin" width="80" height="80" /><br />
                <div>Your Name:</div>
                <input className="sign-up" type="text" defaultValue={this.state.userName} onChange={this.handleInputChange} />
                <input className="submit" type="submit" onClick={this.handleSubmit} />
            </div>
        );
    }
}

export default SignUp;
