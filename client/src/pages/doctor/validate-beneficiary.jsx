import React, { Component } from 'react';
import Beneficiary from '../../services/contracts/Beneficiary';
import { hash } from '../../services/util';

class ValidateBeneficiary extends Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount() {
        Beneficiary.validate(
            "1234",
            "Manish Kumar",
            "23",
            true,
            '0x6768cb9617de2a2c17e1349369b6ef982b051be97e61b51816420f4b72cbe93d',
            '0x20550f40000BcE4C7Be510a66B638ee49794a7F1'
        )
        .then(res => {
            console.log(res)
        })
        
    }
    
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default ValidateBeneficiary;
