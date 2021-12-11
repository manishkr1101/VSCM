import React, { Component } from "react";
import Beneficiary from "../services/contracts/Beneficiary";
import { getSecretKey, hash } from "../services/util";
import web3 from "../services/web3";
import Faqq from "../components/Faq";
import Counter from "../components/Counter";

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
          }}
        >
          <h1
            style={{ color: "white", marginLeft: "30px", paddingTop: "30px" }}
          >
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
            height: "80px",
            backgroundColor: "#17255A",
            textAlign: "center",
            verticalAlign: "middle",
            lineHeight: "200px",
          }}
        >
          <text style={{ color: "white" }}>
            <Counter></Counter>
          </text>
        </div>
        <div
          style={{
            height: "500px",
            backgroundColor: "#18206F",
          }}
        ></div>

        <div
          style={{
            height: "500px",
            backgroundColor: "#18206F",
            paddingTop: "60px",
          }}
        >
          <Faqq></Faqq>
        </div>
      </div>
    );
  }
}

export default UserHome;
