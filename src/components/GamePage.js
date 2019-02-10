import React from "react";
import { connect } from "react-redux";

import database from "../firebase/firebase";

import { setPlayer1Picture, setPlayer2Picture } from "../actions/players";
import { startFatchQuesList } from "../actions/questions";

import currentRoleSelector from "../selectors/currentRoleSelector";

import ScoreArea from "./ScoreArea";
import DrawerStatus from "./DrawerStatus";
import PickerStatus from "./PickerStatus";
import DrawerCanvas from "./DrawerCanvas";
import PickerCanvas from "./PickerCanvas";
import AnswerArea from "./AnswerArea";
import PickArea from "./PickArea";

class GamePage extends React.Component{
    
    componentWillMount = () => {
        // 對firebase的players註冊監聽器
        database.ref("players").on("value", (snapshot) => {
            const { player1, player2 } = snapshot.val();

            // 更新照片
            this.props.setPlayer1Picture(player1.picture);
            this.props.setPlayer2Picture(player2.picture);
        });

        // 提取firebase的quesList並設定到state裡
        this.props.startFatchQuesList();
    }

    render(){
        return(
            <div>
                <ScoreArea />

                {/* 狀態區 */}
                {this.props.role === "drawer" ? (
                    <DrawerStatus />
                ) : (
                    <PickerStatus />
                )}

                {/* 分數區 */}


                {/* 繪圖區 */}
                {this.props.role === "drawer" ? (
                    <DrawerCanvas />
                ) : (
                    <PickerCanvas />
                )}
                
                {/* 猜題區 */}
                {this.props.role === "drawer" ? (
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
        role: currentRoleSelector(state.auth, state.players)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPlayer1Picture: (picture) => {
            dispatch(setPlayer1Picture(picture));
        },
        setPlayer2Picture: (picture) => {
            dispatch(setPlayer2Picture(picture));
        },
        startFatchQuesList: () => {
            dispatch(startFatchQuesList());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);