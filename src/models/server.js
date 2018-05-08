export default {
    namespace: 'server',
    state: {
        content: 'testContent',
        id: 'testId'
    },
    reducers: {
        change(state, { key, value }) {
            let obj = {}
            obj[key] = value
            return Object.assign({}, state, obj)
        }
    },
    event: {
        onReady(dispatch){
            dispatch({ type:'testSaga' })
        }
    }
}

