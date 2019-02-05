import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"

import ConfigureStore from "./store/ConfigureStore";
import PlayersStatus from "./components/PlayersStatus";
import DrawerCanvas from "./components/DrawerCanvas";
import PickingArea from "./components/PickingArea";


const store = ConfigureStore();
const jsx = (
    <Provider store={store}>
        <PlayersStatus />
        <DrawerCanvas />
        <PickingArea />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"));