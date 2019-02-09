import React from "react";
import { connect } from "react-redux";

import PlayersStatus from "./PlayersStatus";
import DrawerCanvas from "./DrawerCanvas";
import PickerCanvas from "./PickerCanvas";
import PickingArea from "./PickingArea";

const GamePage = () => {
    return (
        <div>
            <PlayersStatus />
            <DrawerCanvas />
            <PickerCanvas />
            <PickingArea />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        players: state.players
    };
};

export default connect(mapStateToProps)(GamePage);