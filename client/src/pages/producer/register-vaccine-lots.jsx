import React, { Component } from 'react';
import VaccineRegistry from '../../services/contracts/VaccineRegistry';

class RegisterVaccineLots extends Component {
    componentDidMount() {
        VaccineRegistry.init();
    }
    VaccineLotRegistrationForm() {
        
        return <></>
    }
    render() {
        return (
            <div>
                <div className="container"  style={{maxWidth: "800px"}}>
                    <div className="row">
                        <h1>Register Vaccine Lots</h1>
                    </div>
                    <div className="row">
                        {this.VaccineLotRegistrationForm()}
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterVaccineLots;
