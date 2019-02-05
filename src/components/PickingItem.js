import React from "react";
import { connect } from "react-redux";

import { pickOpt } from "../actions/questions";

class GuessingItem extends React.Component{
    onPickOpt(e){
        const opt = e.target.value;
        this.props.pickOpt(opt);
    }

    render(){
        return (
            <div>
                <button value={this.props.opt} onClick={(e) => {
                    this.onPickOpt(e);
                }}>{this.props.opt}</button>
            </div>
        )
    }    
};

const mapDispatchToProps = (dispatch) => {
    return {
        pickOpt: (opt) => {
            dispatch(pickOpt(opt))
        }
    }
}

export default connect(undefined, mapDispatchToProps)(GuessingItem);