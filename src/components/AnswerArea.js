import React from "react";
import { connect } from "react-redux";

import database from "../firebase/firebase";


class AnswerArea extends React.Component{
    state = {
        opt: undefined
    }

    componentWillMount = () => {
        database.ref("questions/opt").on("value", (snapshot) => {
            const opt = snapshot.val();

            if(opt){
                this.setState({ opt });
            };
        });
    }

    componentWillUnmount = () => {
        database.ref("questions/opt").off();
    }

    render(){
        return (
            <div>
                {!this.state.opt ? (
                    <p>對手正在猜題中</p>
                ) : (
                    this.state.opt === this.props.randomAns ? (
                        <p>對手猜{this.state.opt}，他猜對了！</p>
                    ) : (
                        <p>對手猜{this.state.opt}，很可惜猜錯了！</p>
                    )
                )}
            </div>
        )
        
    }
};


const mapStateToProps = (state) => {
    return {
        randomAns: state.questions.randomAns,
    };
};


export default connect(mapStateToProps)(AnswerArea);