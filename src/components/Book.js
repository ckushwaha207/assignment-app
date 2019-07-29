import React, { Component } from "react";

class Book extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let cardStyle = {
      width: "18rem"
    }

    return (
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h5 className="card-title">{this.props.book.name}</h5>
          <p className="card-text">{this.props.book.description}</p>
        </div>
      </div>
    );
  }
}

export default Book;
