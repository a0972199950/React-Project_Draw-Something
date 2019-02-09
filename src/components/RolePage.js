import React from "react";
import { connect } from "react-redux";

import { startLogout } from "../actions/auth";
import { setMyselfPicture, setOpponentPicture, removeMyselfPicture } from "../actions/players";
import { history } from "../routers/AppRouter";

const RolePage = (props) => {
    return (
        <div>
            <p>(此頁為一個暫時的page，僅用於開發測試)</p>
            <p>選擇一個角色：</p>
            <button 
                onClick={() => {
                    props.setMyselfPicture(props.auth.userPicture);
                    history.push("/game");
                }}>
            Drawer</button>

            <button
                onClick={() => {
                    props.setOpponentPicture(props.auth.userPicture);
                    history.push("/game");
                }}
            >Picker</button>

            <button onClick={() => {
                props.removeMyselfPicture();
                props.startLogout();
            }}>登出</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        startLogout: () => {
            dispatch(startLogout())
        },
        setMyselfPicture: (picture) => {
            dispatch(setMyselfPicture(picture))
        },
        setOpponentPicture: (picture) => {
            dispatch(setOpponentPicture(picture))
        },
        removeMyselfPicture: () => {
            dispatch(removeMyselfPicture())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RolePage);