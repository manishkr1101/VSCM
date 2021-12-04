import React, { Component } from 'react';
import Alert from '../../components/Alert';
import Beneficiary from '../../services/contracts/Beneficiary';


class ValidateBeneficiary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isValid: null
        }
    }
    // for reference how parameter need to be passed
    // componentDidMount() {
    //     Beneficiary.validate(
    //         "1234",
    //         "Manish Kumar",
    //         "23",
    //         true,
    //         hash(['c9de48fe-31c6-42a7-8ef6-93c5b845dfd9']),
    //         '0x5ec58913aD16EE942d6c01fFB2C3D7828A76f56B'
    //     )
    //     .then(res => {
    //         console.log(res)
    //     })
        
    // }

    handleSubmit = async (event) => {
        event.preventDefault();
        
        const isValid = await Beneficiary.validate(
            this.inputAadhar.value.trim(),
            this.inputName.value.trim(),
            this.inputAge.value.trim(),
            this.inputComplicacy.value==="1"?true:false,
            this.inputSecretHash.value.trim(),
            this.inputAddress.value.trim()
        );
        this.setState({isValid: isValid})
        
    }

    ValidationForm() {
        return (
            <div className="registration-form" style={{ marginTop: "12px" }}>
                <div className="mb-3 row">
                    <label htmlFor="name" className="col-sm-2 col-form-label">Full Name</label>
                    <div className="col-sm-10">
                        <input ref={node => (this.inputName = node)} type="text" className="form-control" id="name" placeholder="Ravi Raj"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="aadharNo" className="col-sm-2 col-form-label">Aadhar No</label>
                    <div className="col-sm-10">
                        <input ref={node => (this.inputAadhar = node)} type="number" className="form-control" id="aadharNo" placeholder="111122223333"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputAge" className="col-sm-2 col-form-label">Age</label>
                    <div className="col-sm-10">
                        <input ref={node => (this.inputAge = node)} type="number" className="form-control" id="inputAge"/>
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
                <div className="mb-3 row">
                    <label htmlFor="secret-hash" className="col-sm-2 col-form-label">Secret Hash</label>
                    <div className="col-sm-10">
                        <input ref={node => (this.inputSecretHash = node)} type="text" className="form-control" id="secret-hash" placeholder="0x6768cb9617de2a2c17e1349369b6ef982f051be97e61b51816420f4b72cbe93d"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="public-address" className="col-sm-2 col-form-label">Public Address</label>
                    <div className="col-sm-10">
                        <input required={true} ref={node => (this.inputAddress = node)} type="text" className="form-control" id="public-address" placeholder="0x5ec58913aD16EE942d6c01fFB2C3D7828A76f56B"/>
                    </div>
                </div>

                <div className="col-auto">
                    <button onClick={this.handleSubmit} style={{ float: "right" }} type="submit" className="btn btn-primary mb-3">Check Beneficiary</button>
                </div>
            </div>
        )
    }
    
    render() {
        return (
            <div>
                <div className="container" style={{maxWidth: "800px"}}>
                    <div className="row">
                        <h1>Validate Beneficiary</h1>
                    </div>
                    <div className="row">
                        {this.state.isValid!=null && this.state.isValid && <Alert message="Beneficiary is Valid"/>}
                        {this.state.isValid!=null && !this.state.isValid && <Alert message="Beneficiary is not Valid"/>}
                    </div>
                    <div className="row">
                        {this.ValidationForm()}
                    </div>
                </div>
            </div>
        );
    }
}

export default ValidateBeneficiary;
