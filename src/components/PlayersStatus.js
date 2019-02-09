import React from "react";
import { connect } from "react-redux";

import { myselfGetOnePoint, opponentGetOnePoint, setRound } from "../actions/players";
import { setRandomAns, setRandomOpts } from "../actions/questions";
import { randomAnsSelector } from "../selectors/questions";
import DrawerStatus from "./DrawerStatus";
import PickerStatus from "./PickerStatus";
import DrawerAns from "./DrawerAns";

const PlayersStatus = (props) => {
    return (
        <div>
            {/* UI測試按鈕區域 */}
            <div style={{border: "1px black solid"}}>
                <button onClick={() => {
                    props.myselfGetOnePoint()
                }}>
                    自己得1分
                </button>

                <button onClick={() => {
                    props.opponentGetOnePoint()
                }}>
                    對手得1分
                </button>

                <button onClick={() => {
                    props.setRound({
                        myself: "drawer",
                        opponent: "picker"
                    })
                }}>
                    我的回合
                </button>

                <button onClick={() => {
                    props.setRound({
                        myself: "picker",
                        opponent: "drawer"
                    })
                }}>
                    對手的回合
                </button>

                <button onClick={() => {
                    props.setRandomAns(props.quesList);
                    props.setRandomOpts();
                }}>
                    隨機出題
                </button>
            </div>


            {props.myself.role === "drawer" ? (
                // 當user是繪圖者時的UI
                <DrawerStatus ans={props.randomAns} />
            ) : (
                // 當USER是猜題者時的UI
                <PickerStatus />
            )}

            <div>
                <div>
                    <img src={props.myself.picture ? props.myself.picture : "/images/no-picture.jpg"} alt=""/>
                    <p>{props.myself.currentPoint}分</p>
                </div>

                <div>
                    <img src={props.opponent.picture ? props.opponent.picture : "/images/no-picture.jpg"} alt=""/>
                    <p>{props.opponent.currentPoint}分</p>
                </div>
            </div>

            <p>猜測的答案：{props.opt}</p>

            <DrawerAns />

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
        myselfGetOnePoint: () => {
            dispatch(myselfGetOnePoint());
        },

        opponentGetOnePoint: () => {
            dispatch(opponentGetOnePoint());
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayersStatus);