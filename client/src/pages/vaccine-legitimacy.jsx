import React, { Component } from "react";
import Frame from "../components/Frame";
import VaccineRegistry from "../services/contracts/VaccineRegistry";
import Alert from "../components/Alert";

class VaccineLegitimacy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: null,
      monitoredData: null
    }
  }

  componentDidMount() {
    this.inputVaccineLotId.value = '402d3a53-9156-47ee-ac10-dd3e2970bb51'

  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const vaccineLotId = this.inputVaccineLotId.value.trim();

    try {
      const isLegitimate = await VaccineRegistry.validateLegitemecy(vaccineLotId);
      const monitoredData = await VaccineRegistry.getMonitoredData(vaccineLotId);
      // monitoredData.push(...monitoredData);
      // monitoredData.push(...monitoredData);
      // monitoredData.push(...monitoredData);
      // monitoredData.push(...monitoredData);
      this.setState({
        isValid: isLegitimate,
        monitoredData: monitoredData
      })
    } catch (error) {
      alert(error.message);

      this.setState({
        isValid: null,
        monitoredData: null
      })
    }


  }
  VaccineLegitimacyForm() {
    return (
      <form className="registration-form" style={{ marginTop: "12px" }}>

        <div className="mb-3 row">
          <label htmlFor="lot-id" className="col-sm-3 col-form-label">Vaccine Lot Id</label>
          <div className="col-sm-9">
            <input ref={node => (this.inputVaccineLotId = node)} type="text" className="form-control" id="lot-id" placeholder="a6cd-ef43-ijkl-mn9p" />
          </div>
        </div>

        <div className="col-auto">
          <button onClick={this.handleSubmit} style={{ float: "right" }} type="submit" className="btn btn-primary mb-3">Check Legitimecy</button>
        </div>
      </form>
    )
  }
  MonitoredDataTable() {
    if (!this.state.monitoredData) {
      return ''
    }
    function formatTime(date) {
      return date.toLocaleString('en-US', {
        weekday: 'short', // long, short, narrow
        day: 'numeric', // numeric, 2-digit
        year: 'numeric', // numeric, 2-digit
        month: 'long', // numeric, 2-digit, long, short, narrow
        hour: 'numeric', // numeric, 2-digit
        minute: 'numeric', // numeric, 2-digit
        second: 'numeric', // numeric, 2-digit
      })
    }
    let counter = 1;
    console.log(this.state.monitoredData)
    return (
      <table className="table table-striped table-hover" style={{
        backdropFilter: "blur(6px) brightness(0.9)"
      }}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Date and Time</th>
            <th scope="col">Realtime Temperature</th>
          </tr>
        </thead>
        <tbody>
          {this.state.monitoredData.map(item => {
            return (
              <tr key={counter}>
                <th scope="row">{counter++}</th>
                <td>{formatTime(new Date(item.timestamp))}</td>
                <td>{item.temp} &#8451;</td>
              </tr>
            )
          })}

        </tbody>
      </table>
    )
  }
  render() {
    return (
      <div>
        <Frame imgUrl="/img/legi.jpg">
          <div className="container" style={{ maxWidth: "800px", minHeight: "500px" }}>
            <h1>Vaccine Legitimacy</h1>
            <div className="row">
              {this.state.isValid != null && this.state.isValid && <Alert message="Vaccine is Legitimate" />}
              {this.state.isValid != null && !this.state.isValid && <Alert message="Vaccine is not Legitimate" />}
            </div>
            <div className="row">
              {this.VaccineLegitimacyForm()}
            </div>
            <div className="row"  style={{maxHeight: "350px", overflow: "auto"}}>
              {this.MonitoredDataTable()}
            </div>
          </div>
        </Frame>
      </div>
    );
  }
}

export default VaccineLegitimacy;
