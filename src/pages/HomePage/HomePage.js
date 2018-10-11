import React, { Component } from 'react';

import { BitcoinService } from '../../services/BitcoinService'
import UserService from '../../services/UserService'

import coinsImg from '../../assets/icons/coins.png'
import bitcoinImg from '../../assets/icons/bitcoin.png'
import './HomePage.css'
import MoveList from '../../components/MoveList/MoveList'

class HomePage extends Component {
  state = {
    user: UserService.getLoggedInUser(),
    bitcoinRate: 0
  }

  async componentDidMount() {
    const bitcoinRate = await BitcoinService.getBitcoinRate(this.state.user.coins)
    this.setState({ bitcoinRate })
  }

  render() {
    const user = this.state.user

    return (
      <div className="home-page">
        <div className="user-details">
          <div className="user-name">Hi {user.name}!</div>
          <hr/>
          Current Balance: <br />
          <div className="user-coins-count">
            <img src={coinsImg} alt="coins" width="24px" height="24px" /> Coins: {this.state.user.coins}
          </div>
          <div className="user-coins-rate">
            <img src={bitcoinImg} alt="bitcoin" width="24px" height="24px" /> Bitcon: {this.bitcoinRate}
          </div>
          <h2>Last Moves:</h2>
          <MoveList userMoves={this.state.user.moves} />
        </div>
      </div>
    );
  }
}

export default HomePage;
