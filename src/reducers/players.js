const playersReducerDefaultState = {
    myself: {
        role: "drawer",
        currentPoint: 0
    },
    opponent: {
        role: "picker",
        currentPoint: 0
    }
}

export default (state = playersReducerDefaultState, action) => {
    switch(action.type){
        case "MYSELF_GET_ONE_POINT":
            return {
                ...state,
                myself: {
                    ...state.myself,
                    currentPoint: ++state.myself.currentPoint
                },
            };

        case "OPPONENT_GET_ONE_POINT":
            return {
                ...state,
                opponent: {
                    ...state.opponent,
                    currentPoint: ++state.opponent.currentPoint
                }
            };

        case "SET_ROUND":
            return {
                ...state,
                myself: {
                    ...state.myself,
                    role: action.myself
                },
                opponent: {
                    ...state.opponent,
                    role: action.opponent
                }
            };

        default:
            return state;

    }
    
}