import React from "react";
import { connect } from "react-redux";

import database from "../firebase/firebase";

import PickItem from "./PickItem";
import { setRandomAns } from "../actions/questions";
import { randomOptsSelector } from "../selectors/questions";


class PickArea extends React.Component {
    state = {
        randomOpts: [],
        opt: undefined
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
    }

    handlePickOpt = (opt) => {
        database.ref("questions").update({ opt }).then(() => {
            this.setState({ opt });
        }).catch((err) => {
            console.log(`喔喔，PickArea的handlePickOpt壞掉囉，錯誤內容：${err}`);
        });
        
    }
    

    render(){
        return (
            <div>
                {!this.state.opt ? (
                    this.state.randomOpts.map((randomOpt, index) => {
                        return <PickItem key={index} randomOpt={randomOpt} handlePickOpt={this.handlePickOpt} />
                    })
                ) : (
                    this.state.opt === this.props.randomAns ? (
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
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setRandomAns: (randomAns) => {
            dispatch(setRandomAns(randomAns))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PickArea);