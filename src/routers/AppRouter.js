import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import createHitory from "history/createBrowserHistory";

import LoginPage from "../components/LoginPage";
import RolePage from "../components/RolePage";
import GamePage from "../components/GamePage";

const history = createHitory();

const AppRouter = () => {
    return (
        // 這邊之所以使用<Router>而非<BrowserRouter>，是因為<BrowserRouter>內建了一個history實例，並使用他來完成用戶端routing
        // <BrowserRouter>會把這個history實例往下傳進所有<Route>(因此我們在組件裡面才可以使用this.props.history.push())
        // 但問題是，我們無法在<BrowserRouter>外面使用同一個history實例，他的變數命名空間是在內部的，外部無法access
        // 因此，這邊使用無內建history實例，需手動傳入的<Router>來當作最上層的router
        // 這樣就可以把手動傳入的history實例同時export出去給其他地方用
        // BTW，這邊我想用的地方是在app.js裡面的onAuthStateChanged()
        <Router history={history}>
            {/* <Switch>只會匹配裡面第一個match的<Route>，找到後即停止不會再往下匹配 */}
            {/* 而若只使用<Route>，則預設會匹配所有match的<Route> */}
            <Switch>
                <Route exact path="/" component={LoginPage} />
                <Route path="/role" component={RolePage} />
                <Route path="/game" component={GamePage} />
            </Switch>
        </Router>
    )
}

export { history, AppRouter as default };