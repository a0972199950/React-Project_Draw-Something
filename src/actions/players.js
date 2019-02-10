import database from "../firebase/firebase";

// react得分函數
export const player1GetOnePoint = () => ({
    type: "PLAYER1_GET_ONE_POINT"
});

export const player2GetOnePoint = () => ({
    type: "PLAYER2_GET_ONE_POINT"
});



// react設局函數
export const setRound = ({ player1, player2 }) => ({
    type: "SET_ROUND",
    player1,
    player2
});



// firebase設局函數
export const startSetRound = ({ player1, player2 }) => {
    return (dispatch) => {
        database.ref("players").update({
            player1,
            player2
        }).then(() => {
            dispatch(setRound({
                player1,
                player2
            }))
        })
    };
};



// react設大頭照函數
export const setPlayer1Picture = (picture) => ({
    type: "SET_PLAYER1_PICTURE",
    picture
});

export const setPlayer2Picture = (picture) => ({
    type: "SET_PLAYER2_PICTURE",
    picture
});



// firebase設大頭照函數
export const startSetPlayer1Picture = (picture) => {
    return (dispatch) => {
        database.ref("players/player1/picture").set(picture).then(() => {
            dispatch(setPlayer1Picture(picture));
        }).catch((err) => {
            console.log(`喔喔，startSetPlayer1Picture壞掉囉！錯誤內容：${err}`);
        });
    };
};

export const startSetPlayer2Picture = (picture) => {
    return (dispatch) => {
        database.ref("players/player2/picture").set(picture).then(() => {
            dispatch(setPlayer2Picture(picture));
        }).catch((err) => {
            console.log(`喔喔，startSetPlayer2Picture壞掉囉！錯誤內容：${err}`);
        });
    };
};



// react移除大頭照函數
export const removePlayer1Picture = () => ({
    type: "REMOVE_PLAYER1_PICTURE"
});

export const removePlayer2Picture = () => ({
    type: "REMOVE_PLAYER2_PICTURE"
})