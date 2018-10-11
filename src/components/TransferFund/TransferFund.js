import React, { Component } from 'react';
import UserService from '../../services/UserService'

class TransferFund extends Component {
    state = {
        amount: 0
    }
    updateAmount = (event) => {
        const target = event.target;
        const value = event.target.value;
        this.setState({
            amount: value
        });
    }

    sendAmount = () => {
        if (this.state.amount > 0) UserService.transferBitcoins(this.state.amount, this.props.contact.name, this.props.contact._id);
        else return;
        this.setState({ amount: 0 })
    }
    
    render() {
        return (
            <div className="transfer-fund">
                <div>Transfer coins to {this.props.contact.name}</div>
                <div><input type="number" onChange={this.updateAmount} />
                    <button onClick={this.sendAmount}>SUBMIT</button>
                </div>
            </div>
        )
    }
}

export default TransferFund;
