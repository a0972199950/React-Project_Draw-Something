import React from "react";
import { connect } from "react-redux";


const DrawerAns = (props) => {
    return (
        <div>
            {props.randomAns === props.opt ? (
                <p>猜對了！！</p>
            ) : (
                <p>可惜猜錯囉...</p>
            )}
        </div>
    )
};


const mapStateToProps = (state) => {
    return {
        randomAns: state.questions.randomAns,
        opt: state.questions.opt
    };
};


export default connect(mapStateToProps)(DrawerAns);