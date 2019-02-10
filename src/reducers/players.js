const playersReducerDefaultState = {
    player1: {
        role: "drawer",
        currentPoint: 0,
        picture: ""
    },

    player2: {
        role: "picker",
        currentPoint: 0,
        picture: ""
    }
}

export default (state = playersReducerDefaultState, action) => {
    switch (action.type) {
        case "PLAYER1_GET_ONE_POINT":
            return {
                ...state,
                player1: {
                    ...state.player1,
                    currentPoint: ++state.player1.currentPoint
                },
            };

        case "PLAYER2_GET_ONE_POINT":
            return {
                ...state,
                player2: {
                    ...state.player2,
                    currentPoint: ++state.player2.currentPoint
                }
            };

        case "SET_ROUND":
            return {
                player1: {
                    ...state.player1,
                    role: action.player1
                },
                player2: {
                    ...state.player2,
                    role: action.player2
                }
            };

        case "SET_PLAYER1_PICTURE":
            return {
                ...state,
                player1: {
                    ...state.player1,
                    picture: action.picture
                }
            };

        case "SET_PLAYER2_PICTURE":
            return {
                ...state,
                player2: {
                    ...state.player2,
                    picture: action.picture
                }
            }

        case "REMOVE_PLAYER1_PICTURE":
            return {
                ...state,
                player1: {
                    ...state.player1,
                    picture: ""
                }
            };

        case "REMOVE_PLAYER2_PICTURE":
            return {
                ...state,
                player2: {
                    ...state.player2,
                    picture: ""
                }
            };

        default:
            return state;

    }

}