import React, { Component } from "react";
import Job from "./Job";
import { Switch, Route } from "react-router-dom";
import { COMPANY } from "../shared/company";
import { JOB } from "../shared/job";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: COMPANY,
      job: JOB,
    };
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Job} />
        </Switch>
      </div>
    );
  }
}

export default Main;
