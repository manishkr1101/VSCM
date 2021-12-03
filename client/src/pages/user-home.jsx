import React, { Component } from 'react';
import Beneficiary from '../services/contracts/Beneficiary';
import { getSecretKey, hash } from '../services/util';
import web3 from '../services/web3';

class UserHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registered: false,
            accountAddress: '0x',
            user: {}
        }
    }
    async componentDidMount() {
        
        this.setState({
            user: await Beneficiary.getUser(),
            accountAddress: await web3.getCurrentAccount(),
            registered: await Beneficiary.isRegistered()
        })
    }
    get secretKeyHash() {
        if(this.state.accountAddress === '0x') return ''
        return hash([getSecretKey(this.state.accountAddress)]);
    }
    render() {
        return (
            <div>
                <div className="container">
                    <h1>Welcome {this.state.user?.name}, You are {this.state.registered?'':'not'} registered.</h1>
                    <div className="row">
                        <div className="col-auto">
                            <p>Secret Key Hash : {this.secretKeyHash}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserHome;
