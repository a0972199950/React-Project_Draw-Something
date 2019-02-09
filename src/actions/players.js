export const myselfGetOnePoint = () => ({
    type: "MYSELF_GET_ONE_POINT"
});

export const opponentGetOnePoint = () => ({
    type: "OPPONENT_GET_ONE_POINT"
});

export const setRound = ({ myself, opponent }) => ({
    type: "SET_ROUND",
    myself,
    opponent
});

export const setMyselfPicture = (picture) => ({
    type: "SET_MYSELF_PICTURE",
    picture
});

export const setOpponentPicture = (picture) => ({
    type: "SET_OPPONENT_PICTURE",
    picture
});

export const removeMyselfPicture = () => ({
    type: "REMOVE_MYSELF_PICTURE"
});

export const removeOpponentPicture = () => ({
    type: "REMOVE_OPPONENT_PICTURE"
})