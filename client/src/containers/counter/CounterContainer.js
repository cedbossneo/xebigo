import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {watchCounter, incrementCounter} from 'modules/counter';
import Counter from 'components/Counter';
import IncrementButton from 'components/IncrementButton';

export class CounterContainer extends Component {
    componentDidMount() {
        this.props.watchCounter();
    }

    incrementCounter = () => {
        this.props.incrementCounter(1);
    };

    render() {
        return <div>
                <Counter counter={this.props.counter}/>
                <IncrementButton onIncrement={this.incrementCounter}>Increment</IncrementButton>
            </div>
    }
}

export default connect(
    (state) => ({counter: state.get('counter')}),
    (dispatch) => bindActionCreators({watchCounter, incrementCounter}, dispatch)
)(CounterContainer);
