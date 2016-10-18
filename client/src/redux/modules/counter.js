import axios from 'axios'
import { UPDATE_COUNTER, WATCH_COUNTER } from '../../../../common/constants/counter'

export const watchCounter = () => {
    return {
        type: WATCH_COUNTER,
        server: true,
        persist: true
    };
};

export const incrementCounter = () => {
    return axios.get(`${API_URL}/api/counter/increment`)
};

// Action Handlers
const ACTION_HANDLERS = {
    [WATCH_COUNTER]: (state, action) => action.payload,
    [UPDATE_COUNTER]: (state, action) => action.payload
};

// Reducer
export const initialState = 0;
export default function counterReducer(state = initialState, action) {
    const handler = ACTION_HANDLERS[action.type];
    return handler ? handler(state, action) : state
}
