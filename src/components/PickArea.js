import React from "react";
import { connect } from "react-redux";

import database from "../firebase/firebase";

import PickItem from "./PickItem";
import { setRandomAns } from "../actions/questions";
import { randomOptsSelector } from "../selectors/questions";
import { startSetRound, startGetOnePoint } from "../actions/players";


class PickArea extends React.Component {
    state = {
        randomOpts: [],
        isCorrect: undefined
    }    

    componentWillMount = () => {
        database.ref("questions/randomAns").on("value", (snapshot) => {
            const randomAns = snapshot.val();

            if(randomAns){
                this.props.setRandomAns(randomAns);

                this.setState({
                    randomOpts: randomOptsSelector(this.props.quesList, this.props.randomAns)
                })
            }
        });
    }

    componentWillUnmount = () => {
        database.ref("questions/randomAns").off();

        // 重設opt為false
        database.ref("questions").update({ opt: false }).catch((err) => {
            console.log(`喔喔，PickArea的handlePickOpt壞掉囉，錯誤內容：${err}`);
        });
    }

    componentDidUpdate = () => {
        if(this.state.isCorrect){
            // 處理換局
            const newDrawer = this.props.auth.player;

            setTimeout(() => {
                this.props.startSetRound(newDrawer);
            }, 3000);
        }
    }

    handlePickOpt = (opt) => {
        database.ref("questions").update({ opt }).then(() => {
            if(opt === this.props.randomAns){
                // picker加一分
                const winner = this.props.auth.player;
                const newPoint = this.props[winner].currentPoint + 1;
                this.props.startGetOnePoint(winner, newPoint);

                // 設定isCorrect狀態
                this.setState({ isCorrect: "yes"});
            } else{
                // drawar加一分
                const winner = this.props.auth.player === "player1" ? "player2" : "player1";
                const newPoint = this.props[winner].currentPoint + 1;
                this.props.startGetOnePoint(winner, newPoint);

                // 設定isCorrect狀態
                this.setState({ isCorrect: "no" });
            };

        }).catch((err) => {
            console.log(`喔喔，PickArea的handlePickOpt壞掉囉，錯誤內容：${err}`);
        });        
    }
    

    render(){
        return (
            <div>
                {!this.state.isCorrect ? (
                    this.state.randomOpts.map((randomOpt, index) => {
                        return <PickItem key={index} randomOpt={randomOpt} handlePickOpt={this.handlePickOpt} />
                    })
                ) : (
                    this.state.isCorrect === "yes" ? (
                        <p>你猜對囉！答案就是{this.props.randomAns}</p>
                    ) : (
                        <p>你猜了{this.state.opt}，可惜猜錯了！</p>
                    )
                )}
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        quesList: state.questions.quesList,
        randomAns: state.questions.randomAns,
        auth: state.auth,
        player1: state.players.player1,
        player2: state.players.player2
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setRandomAns: (randomAns) => {
            dispatch(setRandomAns(randomAns))
        },
        startSetRound: (whoIsDrawing) => {
            dispatch(startSetRound(whoIsDrawing))
        },
        startGetOnePoint: (player, newPoint) => {
            dispatch(startGetOnePoint(player, newPoint))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PickArea);