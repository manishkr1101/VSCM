import React, { Component } from 'react';

import Beneficiary from '../services/contracts/Beneficiary'

class VaccineRegistration extends Component {
    constructor() {
        super();
        this.state = {
            registered: false
        }
        
    }
    componentDidMount() {
        // setting the state is giving error don't know why aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaarrgh
        // this.setState({
        //     registered: true
        // })
        // Beneficiary.isRegistered().then(res => {
        //     // this.setState({
        //     //     registered: res=="true"
        //     // })
        //     console.log(res)
        // })
        
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        
        // await Beneficiary.vaccineRegistration(
        //     this.inputAadhar.value,
        //     this.inputName.value,
        //     this.inputAge.value,
        //     this.inputComplicacy.value==="1"?true:false
        // );
        alert('user registered')
        this.setState({registered: true})
        
    }
    RegistrationForm(disabled = false) {
        return (
            <div className="registration-form" style={{ marginTop: "12px" }}>
                <div className="mb-3 row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Full Name</label>
                    <div className="col-sm-10">
                        <input ref={node => (this.inputName = node)} readOnly={disabled} type="text" className="form-control" id="name" placeholder="Ravi Raj" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="aadharNo" className="col-sm-2 col-form-label">Aadhar No</label>
                    <div className="col-sm-10">
                        <input ref={node => (this.inputAadhar = node)} readOnly={disabled} type="number" className="form-control" id="aadharNo" placeholder="111122223333" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputAge" className="col-sm-2 col-form-label">Age</label>
                    <div className="col-sm-10">
                        <input ref={node => (this.inputAge = node)} type="number" className="form-control" id="inputAge" />
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
    UserRegistered() {
        return (
            <>

                
                <div className="alert alert-success" role="alert">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                </svg> {' '}
                    User already registered
                </div>

            </>
        )
    }
    render() {
        
        return (
            <div>
                <div className="container">
                    <h1>Vaccine Registration</h1>
                    <div className="row">
                        <div className="col-8">
                            {this.state.registered ? this.UserRegistered() : ''}
                            {this.RegistrationForm(this.state.registered)}
                            {this.inputName}
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default VaccineRegistration;
