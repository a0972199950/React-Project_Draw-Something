const playersReducerDefaultState = {
    myself: {
        role: "drawer",
        currentPoint: 0,
        picture: ""
    },
    opponent: {
        role: "picker",
        currentPoint: 0,
        picture: ""
    }
}

export default (state = playersReducerDefaultState, action) => {
    switch (action.type) {
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
                myself: {
                    ...state.myself,
                    role: action.myself
                },
                opponent: {
                    ...state.opponent,
                    role: action.opponent
                }
            };

        case "SET_MYSELF_PICTURE":
            return {
                ...state,
                myself: {
                    ...state.myself,
                    picture: action.picture
                }
            };

        case "SET_OPPONENT_PICTURE":
            return {
                ...state,
                opponent: {
                    ...state.opponent,
                    picture: action.picture
                }
            }

        case "REMOVE_MYSELF_PICTURE":
            return {
                ...state,
                myself: {
                    ...state.myself,
                    picture: ""
                }
            };

        case "REMOVE_OPPONENT_PICTURE":
            return {
                ...state,
                opponent: {
                    ...state.opponent,
                    picture: ""
                }
            };

        default:
            return state;

    }

}