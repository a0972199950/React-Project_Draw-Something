export const setDrawingStatus = (drawingStatus) => ({
    type: "SET_DRAWING_STATUS",
    drawingStatus
})

export const updateCoor = (x, y) => ({
    type: "UPDATE_COOR",
    x, y
});