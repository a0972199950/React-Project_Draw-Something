import React from "react";
import { connect } from "react-redux";

import { history } from "../routers/AppRouter";

import { startSetPlayer1Picture, startSetPlayer2Picture, setRound } from "../actions/players";
import { setPlayer } from "../actions/auth";


const RolePage = (props) => {
    return (
        <div>
            <p>(此頁為一個暫時的page，僅用於開發測試)</p>
            <p>選擇一個角色：</p>
            <button 
                onClick={() => {
                    props.setRound({
                        player1: "drawer",
                        player2: "picker"
                    });
                    props.setPlayer("player1");
                    props.startSetPlayer1Picture(props.auth.userPicture);
                    history.push("/game");
                }}>
            Player1(drawer)</button>

            <button
                onClick={() => {
                    props.setRound({
                        player1: "drawer",
                        player2: "picker"
                    });
                    props.setPlayer("player2");
                    props.startSetPlayer2Picture(props.auth.userPicture);
                    history.push("/game");
                }}
            >Player2(picker)</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startSetPlayer1Picture: (picture) => {
            dispatch(startSetPlayer1Picture(picture))
        },
        startSetPlayer2Picture: (picture) => {
            dispatch(startSetPlayer2Picture(picture))
        },
        setRound: (round) => {
            dispatch(setRound(round));
        },
        setPlayer: (player) => {
            dispatch(setPlayer(player))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RolePage);