import React, { Component } from 'react';

class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter:0
    };
    console.log('ChildComponent: Constructor called...');
  }

  componentDidMount() {
    console.log('ChildComponent: Component Did Mount called...');
  }

  shouldComponentUpdate(nextProps, nextState) {
    const canUpdate= nextState.counter !== this.state.counter;
    console.log('ChildComponent: Should Component Update?', canUpdate);
    return canUpdate;
  }

componentDidUpdate(prevProps,prevState,snapshot){
    console.log("ChildComponent: Component Did Update")
    }

componentWillUnmount() {
    console.log("ChildComponent: Component Will Unmount");
    }

incrementCounter=()=>{
    this.setState(prevState => ({
      counter: prevState.counter + 1
    }));
  };

render() {
    return (
      <div>
        <h2>Child Component</h2>
        <p>Counter: {this.state.counter}</p>
        <button onClick={this.incrementCounter}>Increment Counter</button>
      </div>
    );
  }
}
 export default ChildComponent;