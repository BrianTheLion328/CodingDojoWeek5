import React, { Component } from "react";

class ClassCompPersonCard extends Component {
  // constructors are NOT needed when you are only using props
  //    They come by default with inheritance from the Component class
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { firstName, lastName, age, hair } = this.props;
    return (
      <div className="container">
        <h2>
          {lastName}, {firstName}
        </h2>
        <p>Age: {age}</p>
        <p>Hair Color: {hair}</p>
      </div>
    );
  }
}

export default ClassCompPersonCard;


// this is the class component way
