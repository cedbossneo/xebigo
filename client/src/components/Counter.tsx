import * as React from 'react';

export interface CounterProps {
    counter: number
}
export default class Counter extends React.Component<CounterProps, {}> {

    render() {
        return <div>Counter: {this.props.counter}</div>
    }
}
