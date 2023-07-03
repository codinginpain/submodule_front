import React, { Component } from "react";

// Function syntax (to create a component)
// function Hello(props) {
//     return (
//         <h1>Hello {props.name}</h1>
//     )
// }

// Second syntax: ES6 clas based component
class Hello extends React.Component {
    render()  {
        return(
            <h1>Hello {this.props.name}</h1>
        )
    }
}

export default Hello