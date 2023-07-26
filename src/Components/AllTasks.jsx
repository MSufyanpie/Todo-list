import React, { Component } from "react";
import "./AllTasks.css";
export default class AllTasks extends Component {
  render() {
    const { tasks } = this.props;
    return <div class="all-tasks">{tasks}</div>;
  }
}
