import React, { Component } from "react";
import VaccineRegistry from "../../services/contracts/VaccineRegistry";

class VaccineProducerHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requiredVaccine: 0,
    };
  }

  async componentDidMount() {
    this.setState({
      requiredVaccine: await VaccineRegistry.getRequiredVaccineCount(),
    });
  }

  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${"/img/prod.jpg"})`,
            backgroundRepeat: "no-repeat",
            height: "520px",
            // width: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-auto">
                <h1
                  style={{
                    color: "white",
                    marginLeft: "30px",
                    paddingTop: "30px",
                  }}
                >
                  Welcome Producer!
                </h1>{" "}
                <br /> <br />
              </div>
            </div>
            <div className="row" style={{ color: "white" }}>
              <h3>Required Count of Vaccines : {this.state.requiredVaccine}</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VaccineProducerHome;
