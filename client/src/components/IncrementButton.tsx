import * as React from 'react';
import MouseEventHandler = __React.MouseEventHandler;

export interface IncrementButtonProps {
    onIncrement: MouseEventHandler
    children?: any
}
export default class IncrementButton extends React.Component<IncrementButtonProps, {}> {

    render() {
        return <button onClick={this.props.onIncrement}>{this.props.children}</button>
    }
}
