import React, { Component } from "react";

// constructor is the first method called when a class component is created.

// super(props) must be called to access this.props.

// this.state is used to define the initial state of the component.



class LifeCycleFirst extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor: Component Called...");
        // state is a special object used to store data that changes over time.
        this.state = {
            count: 0
        };
    }
// This static lifecycle method is called before rendering both on initial mount and on updates.

// It is used to update the state based on props, but here it's just logging and returning null.
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps() method called");
        return null;
    }

    render() {
        console.log("render() method called");
        return (
            <div>
                <h2>Life Cycle Methods of Class Components:</h2>
                <h3>Count: {this.state.count}</h3>
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    Increment
                </button>
            </div>
        );
    }

    componentDidMount() {
        console.log("componentDidMount() method called");
    }
}

export default LifeCycleFirst;
