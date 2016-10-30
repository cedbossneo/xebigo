import * as React from 'react';

export interface AppContainerProps {
    children?: any
}
export class AppContainer extends React.Component<AppContainerProps, {}> {
    render() {
        return <div>
            {this.props.children}
        </div>
    }
}

export default AppContainer;
