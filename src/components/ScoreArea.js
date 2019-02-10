import React from "react";
import { connect } from "react-redux";

const ScoreArea = (props) => {
    return (
        <div>
            <div style={{display: "flex"}}>
                <div style={{width: "45%"}}>
                    <img style={{width: "100%"}} src={props.player1.picture ? props.player1.picture : "/images/no-picture.jpg"} alt=""/>
                    <p>{props.player1.currentPoint}分</p>
                </div>

                <div style={{width: "45%"}}>
                    <img style={{width: "100%"}} src={props.player2.picture ? props.player2.picture : "/images/no-picture.jpg"} alt=""/>
                    <p>{props.player2.currentPoint}分</p>
                </div>
            </div>

        </div>
    );
};


const mapStateToProps = (state) => {
    return {
        player1: state.players.player1,
        player2: state.players.player2,
    };
};

export default connect(mapStateToProps)(ScoreArea);