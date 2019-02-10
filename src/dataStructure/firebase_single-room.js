var singleRoom = {
    players: {
        player1: {
            role: String,
            currentPoint: Number,
            picture: String
        },

        player2: {
            role: String,
            currentPoint: Number,
            picture: String
        }
    },

    canvas: {
        drawingStatus: String,
        x: Number,
        y: Number
    },

    questions: {
        quesList: Array,
        randomAns: String,
        opt: String
    }
}