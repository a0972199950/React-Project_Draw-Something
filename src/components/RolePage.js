import React from "react";
import { connect } from "react-redux";

import { startLogout } from "../actions/auth";

const RolePage = (props) => {
    return (
        <div>
            <p>(此頁為一個暫時的page，僅用於開發測試)</p>
            <p>選擇一個角色：</p>
            <button>Drawer</button>
            <button>Picker</button>

            <button onClick={() => {
                props.startLogout();
            }}>登出</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        startLogout: () => {
            dispatch(startLogout())
        }
    }
}

export default connect(undefined, mapDispatchToProps)(RolePage);