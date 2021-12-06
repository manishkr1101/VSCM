import React, { Component } from "react";
import Beneficiary from "../services/contracts/Beneficiary";
import { getSecretKey, hash } from "../services/util";
import web3 from "../services/web3";
import Faq from "react-faq-component";

class UserHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registered: false,
      accountAddress: "0x",
      user: {},
    };
  }

  async componentDidMount() {
    this.setState({
      user: await Beneficiary.getUser(),
      accountAddress: await web3.getCurrentAccount(),
      registered: await Beneficiary.isRegistered(),
    });
  }
  get secretKeyHash() {
    if (this.state.accountAddress === "0x") return "";
    return hash([getSecretKey(this.state.accountAddress)]);
  }
  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${"/img/bg.jpg"})`,
            backgroundRepeat: "no-repeat",
            height: "500px",
            width: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
            padding: "0",
          }}
        >
          <h1>
            Welcome {this.state.user?.name}, You are{" "}
            {this.state.registered ? "" : "not"} registered.
          </h1>
          <div className="row">
            <div className="col-auto">
              <p>Secret Key Hash : {this.secretKeyHash}</p>
            </div>
          </div>
        </div>
        <div
          style={{
            height: "500px",
            backgroundColor: "black",
          }}
        >
          {/* <Faq data={data} styles={styles} config={config} /> */}
        </div>
      </div>
    );
  }
}

export default UserHome;
