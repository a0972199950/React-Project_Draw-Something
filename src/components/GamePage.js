import React from "react";
import { connect } from "react-redux";

import database from "../firebase/firebase";

import { setRound, getOnePoint, setPicture } from "../actions/players";
import { startFatchQuesList } from "../actions/questions";


import ScoreArea from "./ScoreArea";
import DrawerStatus from "./DrawerStatus";
import PickerStatus from "./PickerStatus";
import DrawerCanvas from "./DrawerCanvas";
import PickerCanvas from "./PickerCanvas";
import AnswerArea from "./AnswerArea";
import PickArea from "./PickArea";

class GamePage extends React.Component{
    
    componentWillMount = () => {
        // 對firebase的whoIsDrawing註冊監聽器
        database.ref("players/whoIsDrawing").on("value", (snapshot) => {
            const whoIsDrawing = snapshot.val();

            // 更新設局
            this.props.setRound(whoIsDrawing);
        });

        // 對firebase的player1註冊監聽器
        database.ref("players/player1").on("value", (snapshot) => {
            const { currentPoint, picture } = snapshot.val();

            // 更新分數
            this.props.getOnePoint("player1", currentPoint);

            // 更新照片
            this.props.setPicture("player1", picture);
        });

        // 對firebase的player2註冊監聽器
        database.ref("players/player2").on("value", (snapshot) => {
            const { currentPoint, picture } = snapshot.val();

            // 更新分數
            this.props.getOnePoint("player2", currentPoint);

            // 更新照片
            this.props.setPicture("player2", picture);
        });

        // 提取firebase的quesList並設定到state裡
        this.props.startFatchQuesList();
    }

    componentWillUnmount = () => {
        // 對firebase的whoIsDrawing註銷監聽器
        database.ref("players/whoIsDrawing").off();

        // 對firebase的player1註銷監聽器
        database.ref("players/player1").off();

        // 對firebase的player2註銷監聽器
        database.ref("players/player2").off();
    }

    render(){
        return(
            <div>
                {/* 狀態區 */}
                {this.props.isDrawer ? (
                    <DrawerStatus />
                ) : (
                    <PickerStatus />
                )}

                {/* 分數區 */}
                <ScoreArea />

                {/* 繪圖區 */}
                {this.props.isDrawer ? (
                    <DrawerCanvas />
                ) : (
                    <PickerCanvas />
                )}
                
                {/* 猜題區 */}
                {this.props.isDrawer ? (
                    <AnswerArea />
                ) : (
                    <PickArea />
                )}
                
                
            </div>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        isDrawer: state.auth.player === state.players.whoIsDrawing
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setRound: (whoIsDrawing) => {
            dispatch(setRound(whoIsDrawing));
        },
        getOnePoint: (player, newPoint) => {
            dispatch(getOnePoint(player, newPoint));
        },
        setPicture: (player, picture) => {
            dispatch(setPicture(player, picture));
        },
        startFatchQuesList: () => {
            dispatch(startFatchQuesList());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);