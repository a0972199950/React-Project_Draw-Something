var stateDrawer = {
    auth: {
        uid: String,
        username: String,
        userPicture: String,
        player: String // player1 or player2
    },

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

    questions: {
        quesList: Array,
        rendomAns: String
    }
}