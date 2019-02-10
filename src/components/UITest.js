import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { player1GetOnePoint, player2GetOnePoint, setRound } from "../actions/players";
import { setRandomAns, setRandomOpts } from "../actions/questions";
import { randomAnsSelector } from "../selectors/questions";
import { startLogout } from "../actions/auth";

const UITest = (props) => {
    return (
        <div>
            {/* UI測試按鈕區域 */}
            <div style={{border: "1px black solid"}}>
                <button onClick={() => {
                    props.player1GetOnePoint()
                }}>
                    玩家1得1分
                </button>

                <button onClick={() => {
                    props.player2GetOnePoint()
                }}>
                    玩家2得1分
                </button>

                <button onClick={() => {
                    props.setRound({
                        player1: "drawer",
                        player2: "picker"
                    })
                }}>
                    玩家1的回合
                </button>

                <button onClick={() => {
                    props.setRound({
                        player1: "picker",
                        player2: "drawer"
                    })
                }}>
                    玩家2的回合
                </button>

                <button onClick={() => {
                    props.setRandomAns(props.quesList);
                    props.setRandomOpts();
                }}>
                    隨機出題
                </button>

                <button onClick={() => {
                    props.startLogout();
                }}>登出</button>

                <Link to="/init">初始化firebase</Link>
            </div>

        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        myself: state.players.myself,
        opponent: state.players.opponent,
        quesList: state.questions.quesList,
        randomAns: state.questions.randomAns,
        opt: state.questions.opt
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        player1GetOnePoint: () => {
            dispatch(player1GetOnePoint());
        },

        player2GetOnePoint: () => {
            dispatch(player2GetOnePoint());
        },

        setRound: (round) => {
            dispatch(setRound(round));
        },

        setRandomAns: (quesList) => {
            dispatch(setRandomAns(randomAnsSelector(quesList)))
        },

        setRandomOpts: () => {
            dispatch(setRandomOpts())
        },
        startLogout: () => {
            dispatch(startLogout())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UITest);