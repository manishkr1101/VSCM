import React, { Component } from 'react';
import VaccineRegistry from '../../services/contracts/VaccineRegistry';
import {v4 as uuidv4} from 'uuid';

class RegisterVaccineLots extends Component {
    componentDidMount() {
        VaccineRegistry.init();
    }
    handleSubmit = (event) => {
        event.preventDefault();

        VaccineRegistry.registerVaccineLots(
            this.inputVaccineLotId.value.trim(),
            this.inputQuantity.value.trim(),
            this.inputTemperature.value.trim()
        )
        .then(res => {
            console.log(res)
            alert('Vaccine lot registered')
        })

    }
    VaccineLotRegistrationForm() {
        return (
            <form className="registration-form" style={{ marginTop: "12px" }}>
                
                <div className="mb-3 row">
                    <label htmlFor="lot-id" className="col-sm-3 col-form-label">Vaccine Lot Id</label>
                    <div className="col-sm-9">
                        <input ref={node => (this.inputVaccineLotId = node)} type="text" className="form-control" id="lot-id" placeholder="a6cd-ef43-ijkl-mn9p" value={uuidv4()}/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="n-units" className="col-sm-3 col-form-label">Total Units</label>
                    <div className="col-sm-9">
                        <input required min={1} ref={node => (this.inputQuantity = node)} type="number" className="form-control" id="n-units" value="100"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="thresold-temp" className="col-sm-3 col-form-label">Thresold Temperature</label>
                    <div className="col-sm-9">
                        <input ref={node => (this.inputTemperature = node)} type="number" className="form-control" id="thresold-temp" value="5"/>
                    </div>
                </div>
               

                <div className="col-auto">
                    <button onClick={this.handleSubmit} style={{ float: "right" }} type="submit" className="btn btn-primary mb-3">Check Beneficiary</button>
                </div>
            </form>
        )
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
