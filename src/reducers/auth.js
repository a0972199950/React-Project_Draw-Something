const authReducerDefaultState = {
    uid: undefined,
    username: undefined,
    userPicture: undefined
}

const authReducer = (state = authReducerDefaultState, action) => {
    switch(action.type){
        case "LOGIN":
            return {
                uid: action.uid,
                username: action.username,
                userPicture: action.userPicture
            };

        case "LOGOUT":
            return {};

        default:
            return state;
    }
}

export default authReducer;