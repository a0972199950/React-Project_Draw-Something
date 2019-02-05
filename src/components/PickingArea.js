import React from "react";
import { connect } from "react-redux";

import PickingItem from "./PickingItem";


class PickingArea extends React.Component {

    render(){
        return (
            <div>
                {this.props.randomOpts.map((opt) => {
                    return <PickingItem opt={opt} />
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        randomAns: state.questions.randomAns,
        randomOpts: state.questions.randomOpts
    }
}

export default connect(mapStateToProps)(PickingArea);