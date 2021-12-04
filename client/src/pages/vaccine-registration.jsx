import React, { Component } from 'react';
import Alert from '../components/Alert';

import Beneficiary from '../services/contracts/Beneficiary'

class VaccineRegistration extends Component {
    constructor() {
        super();
        this.state = {
            registered: false,
            user: {}
        }
    }
    componentDidMount() {
        
        Beneficiary.isRegistered()
        .then(res => {
            if(res) return Beneficiary.getUser();
            else return null;
        })
        .then(user => {
            if(user) {
                this.setState({
                    registered: true,
                    user: user
                })
            }
        })

        
        
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        
        await Beneficiary.vaccineRegistration(
            this.inputAadhar.value,
            this.inputName.value,
            this.inputAge.value,
            this.inputComplicacy.value==="1"?true:false
        );
        alert('You have been registered successfuly')
        this.setState({registered: true})
        
    }
    RegistrationForm(disabled = false) {
        return (
            <div className="registration-form" style={{ marginTop: "12px" }}>
                <div className="mb-3 row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Full Name</label>
                    <div className="col-sm-10">
                        <input ref={node => (this.inputName = node)} readOnly={disabled} type="text" className="form-control" id="name" placeholder="Ravi Raj" value={this.state.user.name} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="aadharNo" className="col-sm-2 col-form-label">Aadhar No</label>
                    <div className="col-sm-10">
                        <input ref={node => (this.inputAadhar = node)} readOnly={disabled} type="number" className="form-control" id="aadharNo" placeholder="111122223333" value={this.state.user.aadhar} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputAge" className="col-sm-2 col-form-label">Age</label>
                    <div className="col-sm-10">
                        <input ref={node => (this.inputAge = node)} type="number" className="form-control" id="inputAge" value={this.state.user.age} />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputComplicacy" className="col-sm-2 col-form-label">Complicacy</label>
                    <div className="col-sm-10">
                        <select ref={node => (this.inputComplicacy = node)} className="form-select" aria-label="Default select example">
                            <option selected>Open this select choice</option>
                            <option value="1">Yes</option>
                            <option value="0">No</option>

                        </select>
                    </div>
                </div>

                <div className="col-auto">
                    <button onClick={this.handleSubmit} style={{ float: "right" }} disabled={disabled} type="submit" className="btn btn-primary mb-3">Register</button>
                </div>
            </div>
        )
    }
    
    render() {
        
        return (
            <div>
                <div className="container" style={{maxWidth: "800px"}}>
                    <h1>Vaccine Registration</h1>
                    <div className="row">
                        <div className="col-12">
                            {this.state.registered && <Alert message="User already registered"/>}
                            {this.RegistrationForm(this.state.registered)}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default VaccineRegistration;
