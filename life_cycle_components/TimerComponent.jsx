
import React, { Component } from "react";

class TimerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0
        };
        console.log("Constructor: TimerComponent Called...");
    }

    componentDidMount() {
        console.log("TimerComponent Mounted...");
        this.interval = setInterval(() => {
            this.setState({ seconds: this.state.seconds + 1 });
        }, 1000);
    }

    componentWillUnmount() {
        console.log("TimerComponent will Unmount. Clearing Interval...");
        clearInterval(this.interval);
    }

    render() {
        console.log("TimerComponent render() called");
        return (
            <div>
                <h2>Timer Component:</h2>
                <h3>Timer: {this.state.seconds} seconds</h3>
            </div>
        );
    }
}

export default TimerComponent;
