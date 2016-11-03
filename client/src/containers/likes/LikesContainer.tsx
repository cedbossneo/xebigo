import * as React from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import {watchLikes, incrementLike} from 'redux/modules/likes';
import Likes from 'components/Likes';
import LikeButton from 'components/LikeButton';

export interface LikesContainerProps {
    watchLikes: Function
    incrementLike: (nb: number) => void
    likes: number
}
export class LikesContainer extends React.Component<LikesContainerProps, {}> {
    componentDidMount() {
        this.props.watchLikes();
    }

    like = () => {
        this.props.incrementLike(1);
    };

    render() {
        return <div>
                <Likes likes={this.props.likes}/>
                <LikeButton onIncrement={this.like}>Like</LikeButton>
            </div>
    }
}

export default connect(
    (state) => ({likes: state.get('likes')}),
    (dispatch) => bindActionCreators({watchLikes, incrementLike}, dispatch)
)(LikesContainer);
