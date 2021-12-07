import React, { Component } from 'react';
import VaccineRegistry from '../../services/contracts/VaccineRegistry';
import {v4 as uuidv4} from 'uuid';
import { random } from '../../services/util';

class RegisterVaccineLots extends Component {
    componentDidMount() {
        VaccineRegistry.init();
        this.inputVaccineLotId.value = uuidv4();
        this.inputQuantity.value = "25"
        this.inputTemperature.value = "5"
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
        .catch(err => {
            alert(err.message)
        })

    }

    handleSimulate = (event) => {
        event.preventDefault();
        window.vaccineLotId = this.inputVaccineLotId.value.trim();
        window.tempValue = Number.parseInt(this.inputTemperature.value) + 2
        window.__VR = VaccineRegistry;
        window.interval = setInterval(() => {
            window.__VR.monitor(
                window.vaccineLotId,
                random(-8, window.tempValue)
            )
        }, 1000 * 10);

        setTimeout(() => {
            clearInterval(window.interval)
        }, 5000*10);

    }
    VaccineLotRegistrationForm() {
        return (
            <form className="registration-form" style={{ marginTop: "12px" }}>
                
                <div className="mb-3 row">
                    <label htmlFor="lot-id" className="col-sm-3 col-form-label">Vaccine Lot Id</label>
                    <div className="col-sm-9">
                        <input ref={node => (this.inputVaccineLotId = node)} type="text" className="form-control" id="lot-id" placeholder="a6cd-ef43-ijkl-mn9p"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="n-units" className="col-sm-3 col-form-label">Total Units</label>
                    <div className="col-sm-9">
                        <input required min={1} ref={node => (this.inputQuantity = node)} type="number" className="form-control" id="n-units"/>
                    </div>
                </div>
                <div className="mb-3 row">
                    <label htmlFor="thresold-temp" className="col-sm-3 col-form-label">Thresold Temperature</label>
                    <div className="col-sm-9">
                        <input ref={node => (this.inputTemperature = node)} type="number" className="form-control" id="thresold-temp"/>
                    </div>
                </div>
               


                <div className="col-auto d-flex justify-content-end">
                    <button onClick={this.handleSimulate} type="button" className="btn btn-success mb-3" title="Just enter Lot Id and Thresold temperature">Simulate Monitoring</button>
                    <button onClick={this.handleSubmit} type="submit" className="btn btn-primary mb-3" style={{marginLeft: "8px"}}>Register Vaccine Lots</button>
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
