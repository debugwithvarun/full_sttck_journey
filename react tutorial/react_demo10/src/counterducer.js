const initialState={count:0}

function counterReducer(state,action){
    switch (action.type){
        case "+":
            return {count:state.count+1}
        case "-":
            return {count:state.count-1}
        case "+no":
            return {count:(state.count+action.payload)}
        case "-no":
            return {count:(state.count-action.payload)}
        default:
            break
    }
    return state
}

export {counterReducer,initialState}