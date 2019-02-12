import database from "../firebase/firebase";
import { playersInitData } from "../dataStructure/firebase_single-room";

// react得分函數
export const getOnePoint = (player, newPoint) => ({
    type: "GET_ONE_POINT",
    player, newPoint
});

export const startGetOnePoint = (player) => {
    return (dispatch, getState) => {
        const newPoint = ++getState().players[player].currentPoint;

        database.ref(`players/${player}`).update({
            currentPoint: newPoint
        }).then(() => {
            dispatch(getOnePoint(player, newPoint));
        }).catch((err) => {
            console.log(`喔喔，startGetOnePoint壞掉囉！錯誤內容：${err}`);
        })
    }
}



// react設局函數
export const setRound = (whoIsDrawing) => ({
    type: "SET_ROUND",
    whoIsDrawing
});

export const startSetRound = (whoIsDrawing) => {
    return (dispatch) => {
        return database.ref("players/whoIsDrawing").set(whoIsDrawing).then(() => {
            dispatch(setRound(whoIsDrawing));
        }).catch((err) => {
            console.log(`喔喔，startSetRound壞掉囉！錯誤內容：${err}`);
        });
    };
};



// react設大頭照函數
export const setPicture = (player, picture) => ({
    type: "SET_PICTURE",
    player, picture
});

export const startSetPicture = (player, picture) => {
    return (dispatch) => {
        database.ref(`players/${player}`).update({ picture }).then(() => {
            dispatch(setPicture(player, picture));
        }).catch((err) => {
            console.log(`喔喔，startSetPicture壞掉囉！錯誤內容：${err}`);
        });
    };
};



// 初始化Players狀態
export const initPlayers = (playersInitData) => ({
    type: "INIT_PLAYERS",
    playersInitData
});

export const startInitPlayers = () => {
    return (dispatch) => {
        database.ref("players").set(playersInitData).then(() => {
            dispatch(initPlayers(playersInitData))
        }).catch((err) => {
            console.log(`喔喔，startInitPlayers壞掉囉！錯誤內容：${err}`);
        });
    };
};



// react移除大頭照函數
export const removePlayer1Picture = () => ({
    type: "REMOVE_PLAYER1_PICTURE"
});

export const removePlayer2Picture = () => ({
    type: "REMOVE_PLAYER2_PICTURE"
});