import React, { Component } from "react";

class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      rememberMe: false,
    };
  }

  handleChange = (event) => {
    const input = event.target;
    const value = input.value;
    this.setState({ [input.name]: value, [input.name]: value });
  };

  handleFormSubmit = () => {};

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>
          Company:{" "}
          <input
            name="companyInput"
            value={this.state.company}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Job:{" "}
          <input
            name="jobInput"
            value={this.state.job}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add Job</button>
      </form>
    );
  }
}

export default Job;
