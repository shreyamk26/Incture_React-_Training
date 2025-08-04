import React, { Component } from 'react';
import ChildComponent from './Components/ChildComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChild: true,
      appState: Math.random()
    };
    console.log("App: Constructor");
  }

  toggleChild = () => {
    this.setState(prevState => ({
      showChild: !prevState.showChild
    }));
  };

  componentDidMount() {
    this.appInterval = setInterval(() => {
      this.setState({ appState: Math.random() });
    }, 5000);
    console.log("App: Component Did Mount");
  }

  componentWillUnmount() {
    clearInterval(this.appInterval);
    console.log("App : Component Will Unmount")
  }

  render(){
    return(
      <div>
        <h1>React Life Cycle Demo</h1>
        <button onClick={this.toggleChild}>Toggle Child Component</button>
        {this.state.showChild && <ChildComponent/>}
      </div>
    )
  }

}

export default App;
