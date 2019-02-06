import React from "react";
import { connect } from "react-redux";

import { startLogin, startLogout } from "../actions/auth";

const LoginPage = (props) => {
    return (
        <div>
            <button
                onClick={() => {
                    props.startLogin()
                }}
            >登入</button>

            <button
                onClick={() => {
                    props.startLogout()
                }}
            >登出</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: () => {
            dispatch(startLogin())
        },

        startLogout: () => {
            dispatch(startLogout())
        }
    }
}

export default connect(undefined, mapDispatchToProps)(LoginPage);