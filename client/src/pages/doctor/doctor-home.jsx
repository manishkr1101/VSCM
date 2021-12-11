import React, { Component } from "react";
import Counter from "../../components/Counter";
import Faqq from "../../components/Faq";

class DoctorHome extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${"/img/doc.jpg"})`,
            backgroundRepeat: "no-repeat",
            height: "500px",
            // width: "100%",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <h1
            style={{ color: "white", marginLeft: "30px", paddingTop: "30px" }}
          >
            Welcome Doctor!
          </h1>{" "}
          <br />
          <br />
          <h3 style={{ color: "white", marginLeft: "30px" }}>
            You can now check the current statistics, <br />
            validate the beneficiary, <br />
            check for vaccine legitmacy all and <br />
            read FAQs <br />
            at one place!
          </h3>
          <br />
          <br />
          <h5 style={{ color: "white", marginLeft: "30px" }}>
            To begin with refer to the navigation above.
          </h5>
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
            paddingTop: "60px",
          }}
        >
          <Faqq></Faqq>
        </div>
      </div>
    );
  }
}

export default DoctorHome;
