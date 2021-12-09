import React, { Component } from 'react';
import Frame from '../../components/Frame';
import Alert from '../../components/Alert';
import Beneficiary from '../../services/contracts/Beneficiary';
import VaccineRegistry from '../../services/contracts/VaccineRegistry';

class Vaccination extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isValid: null,
            isVaccinated: null
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        try {


            const isValid = await Beneficiary.validate(
                this.inputAadhar.value.trim(),
                this.inputName.value.trim(),
                this.inputAge.value.trim(),
                this.inputComplicacy.value === "1" ? true : false,
                this.inputSecretHash.value.trim(),
                this.inputBeneficiaryAddress.value.trim()
            );
            this.setState({ isValid: isValid });
            if (isValid === false) {
                return;
            }

            await VaccineRegistry.vaccinate(
                this.inputBeneficiaryAddress.value.trim(),
                this.inputDoctorAddress.value.trim(),
                this.inputLotId.value.trim(),
                this.inputAadhar.value.trim()
            );
            this.setState({
                isValid: true,
                isVaccinated: true
            })

        } catch (error) {
            alert(error.message);
            this.setState({isValid: null, isVaccinated: false})
        }

    }

    ValidationForm() {
        return (
            <div className="registration-form" style={{ marginTop: "12px" }}>
                <div className="mb-3 row">
                    <label htmlFor="name" className="col-sm-3 col-form-label">Full Name</label>
                    <div className="col-sm-9">
                        <input ref={node => (this.inputName = node)} type="text" className="form-control" id="name" placeholder="Ravi Raj" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="aadharNo" className="col-sm-3 col-form-label">Aadhar No</label>
                    <div className="col-sm-9">
                        <input ref={node => (this.inputAadhar = node)} type="number" className="form-control" id="aadharNo" placeholder="111122223333" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputAge" className="col-sm-3 col-form-label">Age</label>
                    <div className="col-sm-9">
                        <input ref={node => (this.inputAge = node)} type="number" className="form-control" id="inputAge" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="inputComplicacy" className="col-sm-3 col-form-label">Complicacy</label>
                    <div className="col-sm-9">
                        <select ref={node => (this.inputComplicacy = node)} className="form-select" aria-label="Default select example">
                            <option selected>Open this select choice</option>
                            <option value="1">Yes</option>
                            <option value="0">No</option>

                        </select>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="secret-hash" className="col-sm-3 col-form-label">Secret Hash</label>
                    <div className="col-sm-9">
                        <input ref={node => (this.inputSecretHash = node)} type="text" className="form-control" id="secret-hash" placeholder="0x6768cb9617de2a2c17e1349369b6ef982f051be97e61b51816420f4b72cbe93d" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="public-address" className="col-sm-3 col-form-label">Beneficiary Address</label>
                    <div className="col-sm-9">
                        <input required={true} ref={node => (this.inputBeneficiaryAddress = node)} type="text" className="form-control" id="public-address" placeholder="0x5ec58913aD16EE942d6c01fFB2C3D7828A76f56B" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="Doctor-address" className="col-sm-3 col-form-label">Doctor Address</label>
                    <div className="col-sm-9">
                        <input required={true} ref={node => (this.inputDoctorAddress = node)} type="text" className="form-control" id="Doctor-address" placeholder="0x5ec58913aD16EE942d6c01fFB2C3D7828A76f56B" />
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="lot-id" className="col-sm-3 col-form-label">Vaccine Lot Id</label>
                    <div className="col-sm-9">
                        <input required={true} ref={node => (this.inputLotId = node)} type="text" className="form-control" id="lot-id" placeholder="402d3a53-9156-47ee-ac10-dd3e2970bb51" />
                    </div>
                </div>

                <div className="col-auto">
                    <button onClick={this.handleSubmit} style={{ float: "right" }} type="submit" className="btn btn-primary mb-3">Vaccinate Beneficiary</button>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <Frame>
                    <div className="container" style={{ maxWidth: "800px" }}>
                        <div className="row">
                            <h1>Vaccinate Beneficiary</h1>
                        </div>
                        <div className="row">
                            {this.state.isValid != null && this.state.isValid && <Alert message="Beneficiary is Valid" />}
                            {this.state.isValid != null && !this.state.isValid && <Alert message="Beneficiary is not Valid" type="error" />}
                        </div>
                        <div className="row">
                            {this.state.isVaccinated != null && this.state.isVaccinated && <Alert message="Beneficiary is Vaccinated" />}
                            {this.state.isVaccinated != null && !this.state.isVaccinated && <Alert message="Beneficiary is not Vaccinated" type="error" />}
                        </div>
                        <div className="row">
                            {this.ValidationForm()}
                        </div>
                    </div>
                </Frame>
            </div>
        );
    }
}

export default Vaccination;
