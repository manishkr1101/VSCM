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
            hash(['c9de48fe-31c6-42a7-8ef6-93c5b845dfd9']),
            '0x5ec58913aD16EE942d6c01fFB2C3D7828A76f56B'
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
