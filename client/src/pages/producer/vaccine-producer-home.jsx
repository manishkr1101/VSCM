import React, { Component } from 'react';
import VaccineRegistry from '../../services/contracts/VaccineRegistry';

class VaccineProducerHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            requiredVaccine: 0
        }
    }

    async componentDidMount() {
        this.setState({
            requiredVaccine: await VaccineRegistry.getRequiredVaccineCount()
        })
    }
    
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-auto">
                            <h1>show here the required count of vaccines and another metrics</h1>
                        </div>
                    </div>
                    <div className="row">
                        <h1>Required Count of Vaccines : {this.state.requiredVaccine}</h1>
                    </div>
                </div>
            </div>
        );
    }
}

export default VaccineProducerHome;
