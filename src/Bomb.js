// your Bomb code here!
import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
         secondsLeft: this.props.initialCount
        }
    }
    render() {
       // console.log('initial count: ',this.props.initialCount);
        return <div>{this.state.secondsLeft !== 0 ? this.state.secondsLeft+' seconds left before I go boom!' : 'Boom!'}</div>;
    }
}

export default Bomb;