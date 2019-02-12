const playersReducerDefaultState = {
    whoIsDrawing: undefined,

    player1: {
        currentPoint: 0,
        picture: ""
    },

    player2: {
        currentPoint: 0,
        picture: ""
    }
}

export default (state = playersReducerDefaultState, action) => {
    switch (action.type) {
        case "GET_ONE_POINT":
            return action.player === "player1" ? (
                {
                    ...state,
                    player1: {
                        ...state.player1,
                        currentPoint: action.newPoint
                    }
                }
            ) : (
                action.player === "player2" ? (
                    {
                        ...state,
                        player2: {
                            ...state.player2,
                            currentPoint: action.newPoint
                        }
                    }
                ) : (
                    state
                )
            );

        // TODO: 這邊開始待刪除
        /*
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
        */

        case "SET_ROUND":
            return {
                ...state,
                whoIsDrawing: action.whoIsDrawing
            };

        case "SET_PICTURE":
            return action.player === "player1" ? (
                {
                    ...state,
                    player1: {
                        ...state.player1,
                        picture: action.picture
                    }
                }
            ) : (
                action.player === "player2" ? (
                    {
                        ...state,
                        player2: {
                            ...state.player2,
                            picture: action.picture
                        }
                    }
                ) : (
                    state
                )
            )

        // TODO: 這邊開始待刪除
        /*
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
        */

        case "INIT_PLAYERS":
            return action.playersInitData;


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