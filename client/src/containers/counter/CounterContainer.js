import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {watchCounter} from 'modules/counter';

export class CounterContainer extends Component {
    componentDidMount() {
        this.props.watchCounter();
    }

    render() {
        return <div>Counter: {this.props.counter}</div>
    }
}

export default connect(
    (state) => ({counter: state.get('counter')}),
    (dispatch) => bindActionCreators({watchCounter}, dispatch)
)(CounterContainer);
