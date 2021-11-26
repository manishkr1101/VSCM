import React, { Component } from 'react';
import Beneficiary from '../services/contracts/Beneficiary';

class UserHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registered: false
        }
    }
    componentDidMount() {
        Beneficiary.isRegistered().then(res => {
            this.setState({registered: res})
        })
    }
    render() {
        return (
            <div>
                <h1>Welcome Manish, You are {this.state.registered?'':'not'} registered.</h1>
            </div>
        );
    }
}

export default UserHome;
