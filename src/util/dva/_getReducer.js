import defaultHandleActions from './handleActions'

export default function getReducer(reducers,state) {
    // Support reducer enhancer
    // e.g. reducers: [realReducers, enhancer]
    if (Array.isArray(reducers)) {
        return reducers[1](defaultHandleActions(reducers[0], state))
    } else {
        return defaultHandleActions(reducers || {}, state)
    }
}