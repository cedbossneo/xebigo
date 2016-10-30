import * as axios from 'axios'
import { UPDATE_COUNTER, WATCH_COUNTER } from '../../../../common/constants/counter'
import {Reducer, ReducersMapObject} from "redux";

export const watchCounter = () => {
    return {
        type: WATCH_COUNTER,
        server: true,
        persist: true
    };
};

export const incrementCounter = (increment) => {
    axios.post(`API_URL/api/counter/increment`, {increment})
};

// Action Handlers
const ACTION_HANDLERS: ReducersMapObject = {
    [WATCH_COUNTER]: (state: number, action) => action.payload,
    [UPDATE_COUNTER]: (state: number, action) => action.payload
};

// Reducer
export const initialState = 0;
export default function counterReducer(state = initialState, action): Reducer<number> {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state
}
