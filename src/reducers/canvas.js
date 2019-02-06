const canvasReducerDefaultState = {
    drawingStatus: "end",
    x: 0,
    y: 0
}

export default (state = canvasReducerDefaultState, action) => {
    switch(action.type){
        case "SET_DRAWING_STATUS":
            return {
                ...state,
                drawingStatus: action.drawingStatus
            }

        case "UPDATE_COOR":
            return {
                ...state,
                x: action.x,
                y: action.y
            };

        default:
            return state;
    }
}