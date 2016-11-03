import * as React from 'react';

export interface LikesProps {
    likes: number
}
export default class Likes extends React.Component<LikesProps, {}> {

    render() {
        return <div>Likes: {this.props.likes}</div>
    }
}
