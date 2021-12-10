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

            <div className="registration-form" style={{ marginTop: "12px" }}>
              <div className="mb-3 row">
                <label htmlFor="name" className="col-sm-2 col-form-label">
                  Full Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Ravi Raj"
                    value={this.state.name}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="inputAge" className="col-sm-2 col-form-label">
                  Age
                </label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    id="inputAge"
                    value={this.state.age}
                  />
                </div>
              </div>
              <div className="mb-3 row">
                <label
                  htmlFor="inputComplicacy"
                  className="col-sm-2 col-form-label"
                >
                  Complicacy
                </label>
                <div className="col-sm-10">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                  >
                    <option selected>Open this select choice</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                  </select>
                </div>
              </div>
              <div className="mb-3 row">
                <label htmlFor="name" className="col-sm-2 col-form-label">
                  Feedback
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="feedback"
                    placeholder="Feedback"
                    value={this.state.feedback}
                  />
                </div>
              </div>
              <div className="col-auto">
                <button
                  onClick={this.handleSubmit}
                  style={{ float: "right" }}
                  type="submit"
                  className="btn btn-primary mb-3"
                  color="black"
                >
                  Submit Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
