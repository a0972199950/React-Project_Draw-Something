export const myselfGetOnePoint = () => ({
    type: "MYSELF_GET_ONE_POINT"
});

export const opponentGetOnePoint = () => ({
    type: "OPPONENT_GET_ONE_POINT"
});

export const setRound = ({ myself, opponent}) => ({
    type: "SET_ROUND",
    myself,
    opponent
})