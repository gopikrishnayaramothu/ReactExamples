import React, { Component } from 'react'

export class ChildComponent extends Component {
    constructor(props){
        super(props)
        console.log("first");
        this.state = {
          name: 'Constructor Method',
          date: new Date(),
          mount: false
        }
      }

      componentDidMount() {
        console.log("third");
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }

      shouldComponentUpdate() {
        return true; //Change to true for state to update
      }

      componentWillUnmount() {
        clearInterval(this.timerID);
      }

    static getDerivedStateFromProps(props, state) {
        return {name: props.nameFromParent} 
      }

      tick() {
        this.setState({date: new Date()});
      }

      componentDidUpdate() {
        console.log('component updated ');
      }
    render() {
        return (
            <div>
                This is a {this.state.name}
                <br/>
                <b>Time is {this.state.date.toLocaleTimeString()}</b>
                <p>{this.state.mount ? <Child/> : null}</p>
               <button onClick={() => {this.setState({mount: !this.state.mount})}}>Click me to toggle</button>
            </div>
        )
    }
}

class Child extends Component {
  componentWillUnmount() {
    //api calls 
    //db calls
    //memory cleanup
    // object relationships
    alert('I have been unmounted 😭')
  }
  render() {
    return (
      <p>Test</p>
    )
  }
}
export default class ReactLifeCycle extends Component {
   
    render() {
        return (
            <div>
                <ChildComponent nameFromParent="getDerivedStateFromProps Method"/>
            </div>
        )
    }
}