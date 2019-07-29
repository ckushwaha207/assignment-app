import React, { Component } from "react";

class Specification extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.specification.title}(
          {this.props.specification.description})
        </div>
      </div>
    );
  }
}

export default Specification;
