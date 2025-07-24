// LifeCycleThird.js
import React, { Component } from "react";
import TimerComponent from "./TimerComponent";

class LifeCycleThird extends Component {
    constructor() {
        super();
        console.log("Constructor: LifeCycleThird Called...");
        this.state = {
            showTimer: true
        };
    }

    toggleTimer = () => {
        this.setState({ showTimer: !this.state.showTimer });
    };

    render() {
        console.log("LifeCycleThird render() called");
        return (
            <div>
                <button onClick={this.toggleTimer}>
                    Toggle Timer
                </button>
                {this.state.showTimer && <TimerComponent />}
            </div>
        );
    }
}

export default LifeCycleThird;
