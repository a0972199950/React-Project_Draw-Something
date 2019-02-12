var singleRoom = {
    players: {
        whoIsDrawing: "",

        player1: {
            currentPoint: 0,
            picture: ""
        },

        player2: {
            currentPoint: 0,
            picture: ""
        }
    },

    canvas: {
        drawingStatus: "",
        x: 0,
        y: 0
    },

    questions: {
        quesList: [],
        randomAns: "",
        opt: ""
    }
}

const playersInitData = singleRoom.players;
const canvasInitData = singleRoom.canvas;
const questionsInitData = singleRoom.questions;

export { playersInitData, canvasInitData, questionsInitData };