import { firebase, googleAuthProvider } from "../firebase/firebase";

export const login = (uid, username, userPicture) => {
    return {
        type: "LOGIN",
        uid, username, userPicture
    };
};

export const startLogin = () => {
    return () => {
        console.log("start login");
        firebase.auth().signInWithPopup(googleAuthProvider);
    }
}

export const logout = () => {
    return {
        type: "LOGOUT"
    }
}

export const startLogout = () => {
    return () => {
        console.log("start logout");
        firebase.auth().signOut();
    }
}




export const setPlayer = (player) => ({
    type: "SET_PLAYER",
    player
})