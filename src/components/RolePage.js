import React from "react";
import { connect } from "react-redux";

import { history } from "../routers/AppRouter";

import { startInitPlayers, startSetRound, startSetPicture } from "../actions/players";
import { startInitQuestions } from "../actions/questions";
import { setPlayer } from "../actions/auth";


class RolePage extends React.Component{
    componentDidMount = () => {
        this.props.startInitPlayers();
        this.props.startInitQuestions();
    }

    render(){
        return (
            <div>
                <p>(此頁為一個暫時的page，僅用於開發測試)</p>
                <p>選擇一個角色：</p>
                <button 
                    onClick={() => {
                        this.props.setPlayer("player1");
                        this.props.startSetRound("player1");

                        setTimeout(() => {
                            this.props.startSetPicture(this.props.auth.player, this.props.auth.userPicture);
                            history.push("/game");
                        }, 1000);
                        
                    }}>
                Player1(drawer)</button>

                <button
                    onClick={() => {
                        this.props.setPlayer("player2");
                        this.props.startSetRound("player1");

                        setTimeout(() => {
                            this.props.startSetPicture(this.props.auth.player, this.props.auth.userPicture);
                            history.push("/game");
                        }, 1000);
                    }}
                >Player2(picker)</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startInitPlayers: () => {
            dispatch(startInitPlayers())
        },
        startInitQuestions: () => {
            dispatch(startInitQuestions());
        },
        startSetRound: (whoIsDrawing) => {
            dispatch(startSetRound(whoIsDrawing));
        },
        setPlayer: (player) => {
            dispatch(setPlayer(player))
        },
        startSetPicture: (player, picture) => {
            dispatch(startSetPicture(player, picture))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RolePage);