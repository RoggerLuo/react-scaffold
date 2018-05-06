import invariant from 'invariant'

function identify(value) {
    return value;
}

function handleAction(actionType, reducer = identify) {
    /*
        actionType: 'change'
        reducer: function(state, { key, value }) {
            let obj = {}
            obj[key] = value
            return state
        }  
    */
    return (state, action) => {
        const { type } = action;
        invariant(type, 'dispatch: action should be a plain Object with type');
        if (actionType === type) {
            return reducer(state, action)
        }
        return state
    };
}

function reduceReducers(...reducers) {
    // currentAction 包含了行为type、数据，具体怎么处理还要看type对应的reducer
    return (previous, currentAction) =>
        reducers.reduce((p, currentReducerMethod) => currentReducerMethod(p, currentAction), previous);
        /*
            初始状态（上一次调用的返回state)作为当前reduce方法的输入state,
            意思就是把所有的reduce都跑了一遍，从头到位，
            因为校验type的代码写在了函数实例里面，
            所以 
        */
}
function handleActions({ reducers, state, namespace }) {
    const handlers = reducers || {}
    const defaultState = state || {}
    invariant(namespace,`reducer namespace can't find`)
    /*
      handler就是 reducers
      {
        change:function, return state
        load:function, return state
      }
    */
    const reducersArray = Object.keys(reducers).map(type => //type就是model里的reduce的名字（change）
        handleAction(namespace+'/'+type , handlers[type])
    )
    /*
        reducers是一个数组，里面是各个function change(state,action){}一样的函数实例,函数内部自带type校验
    */
    const reducer = reduceReducers(...reducersArray);
    return (state = defaultState, action) => reducer(state, action);
}

export default handleActions

