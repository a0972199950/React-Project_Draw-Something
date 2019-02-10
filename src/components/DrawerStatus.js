import React from "react";
import { connect } from "react-redux";

import { startSetRandomAns } from "../actions/questions";

class DrawerStatus extends React.Component{
    componentWillMount = () => {
        this.props.startSetRandomAns();
    }

    render(){
        return (
            <div>
                題目：{this.props.randomAns}
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        randomAns: state.questions.randomAns,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startSetRandomAns: () => {
            dispatch(startSetRandomAns())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerStatus);

