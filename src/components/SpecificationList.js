import React, { Component } from "react";
import Specification from "./Specification";

class SpecificationList extends Component {
  render() {
    const specificationsToRender = [
      {
        specifications: [
          {
            id: "1",
            title: "Including success stories of Mark and Musk",
            description:
              "Author express the huge requirement of new ideas and uniqueness."
          },
          {
            id: "2",
            title: "Including success stories of Mark and Musk",
            description:
              "Author express the huge requirement of new ideas and uniqueness."
          },
          {
            id: "3",
            title: "Including success stories of Mark and Musk",
            description:
              "Author express the huge requirement of new ideas and uniqueness."
          },
          {
            id: "4",
            title: "Including success stories of Mark and Musk",
            description:
              "Author express the huge requirement of new ideas and uniqueness."
          },
          {
            id: "5",
            title: "Including success stories of Mark and Musk",
            description:
              "Author express the huge requirement of new ideas and uniqueness."
          }
        ]
      }
    ];

    return (
      <div>
        {specificationsToRender.map(specification => (
          <Specification key={specification.id} book={specification} />
        ))}
      </div>
    );
  }
}

export default SpecificationList;
