import "babel-polyfill"
import getReducer from './handleActions'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import invariant from 'invariant'
export default function() {
    const app = {
        _models: [],
        _store: null,
        model: null,
        saga: null,
    }
    start(app)
    return app
}

function start(app) {
    const reducers = {}
    const sagas = []
    const sagaMiddleware = createSagaMiddleware()
    app._store = createStore(a=>a,applyMiddleware(sagaMiddleware))
    app.model = function(m){
        invariant(
            Object.keys(reducers).every(key => key !== m.namespace),
            `reducer name:[${m.namespace}] is conflict with other reducers`
        )
        reducers[m.namespace] = getReducer(m)
        app._store.replaceReducer(combineReducers({...reducers}))
    }
    app.saga = function(effect){
        sagaMiddleware.run(effect)
    }
}
