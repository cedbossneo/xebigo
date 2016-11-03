import * as axios from 'axios'
import { UPDATE_LIKES_COUNT, WATCH_LIKES } from '../../../../common/constants/likes'
import {Reducer, ReducersMapObject} from "redux";

export const watchLikes = () => {
    return {
        type: WATCH_LIKES,
        server: true,
        persist: true
    };
};

export const incrementLike = (increment) => {
    axios.post(`API_URL/api/counter/increment`, {increment})
};

// Action Handlers
const ACTION_HANDLERS: ReducersMapObject = {
    [WATCH_LIKES]: (state: number, action) => action.payload,
    [UPDATE_LIKES_COUNT]: (state: number, action) => action.payload
};

// Reducer
export const initialState = 0;
export default function likesReducer(state = initialState, action): Reducer<number> {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state
}
