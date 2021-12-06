import React, { Component } from "react";

class VaccineLegitimacy extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${"/img/legi.jpg"})`,
            height: "500px",
            width: "100%",
            backgroundSize: "cover",
          }}
        >
          <div className="container" style={{ maxWidth: "800px" }}>
            <h1>Vaccine Legitimacy</h1>
            <div className="row">
              <div className="col-12"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VaccineLegitimacy;
