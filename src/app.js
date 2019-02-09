import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"

import ConfigureStore from "./store/ConfigureStore";
import AppRouter, { history } from "./routers/AppRouter"; // 當想要同時import default export跟name export時，default export一定要寫在前面
import PlayersStatus from "./components/PlayersStatus";
import DrawerCanvas from "./components/DrawerCanvas";
import PickerCanvas from "./components/PickerCanvas";
import PickingArea from "./components/PickingArea";
import { firebase } from "./firebase/firebase";
import { login, logout } from "./actions/auth";


const store = ConfigureStore();
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);


firebase.auth().onAuthStateChanged((user) => {
    if(user){
        console.log("login");

        const { uid, displayName, photoURL } = user;
        store.dispatch(login(uid, displayName, photoURL));

        // history.push("/role");
    } else{
        console.log("logout");

        store.dispatch(logout());

        // history.push("/");
    }
})


ReactDOM.render(jsx, document.getElementById("app"));