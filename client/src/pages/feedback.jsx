import React, { Component } from "react";

class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("The feedback was submitted successfully!!");
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div
          style={{
            backgroundImage: `url(${"/img/fbk.jpg"})`,
            height: "500px",
            width: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container" style={{ maxWidth: "800px" }}>
            <h1>Feedback Form</h1>
            <div className="row">
              <div className="col-12">
                <form onSubmit={this.handleSubmit}>
                  <label>
                    Full Name:
                    <input
                      type="text"
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                  </label>
                  <br />
                  <label>
                    Age:
                    <input
                      type="text"
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                  </label>
                  <br />
                  <label>
                    Complicacy:
                    <input
                      type="text"
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                  </label>
                  <br />
                  <label>
                    Feedback:
                    <input
                      type="text"
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                  </label>
                  <br />
                  <input type="submit" value="Submit" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
