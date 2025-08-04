import React, { Component } from "react";

class LifeCycleSecond extends Component {
    constructor(props) {
        super(props);
        console.log("Constructor: Component Called...");
        // state is a special object used to store data that changes over time.
        this.state = {
            value: 0
        };
          console.log("Constructor is called")
    }
     static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps() method called.......");
        return null;
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate() method is called.......")
        return true;
        // if it treu coponnet is updated else value is not increment(false)
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        console.log(" getSnapshotBeforeUpdate() method is called......")
        return null;
    }
    componentDidUpdate(prevProps,prevState,snapshot)
    {
        console.log(" componentDidUpdate() method is called........")
    }
    componentDidMount() {
        console.log("componentDidMount() method called");
    }
     render() {
        console.log("render() method called");
        return (
            <div>
                <h2>Updating Phase: </h2>
                <h3>Value: {this.state.value}</h3>
                <button onClick={() => this.setState({ value: this.state.value + 1 })}>
                    Increment
                </button>
            </div>
        );
    }
}
export default LifeCycleSecond;

// first only update 4 mounting method then after upadte or increment other method update