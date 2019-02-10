import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";


const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    return (
        <Route {...rest} component={(props) => (
            isAuthenticated ? (
                <Redirect to="/role" />
            ) : (
                <Component {...props} />
            )
        )} />
    )
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: !!state.auth.uid
    };
};


export default connect(mapStateToProps)(PublicRoute);