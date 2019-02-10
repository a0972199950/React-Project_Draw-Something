import React from "react";

import database from "../firebase/firebase";
import { quesList } from "../dataStructure/init_data";

class Init extends React.Component{
    state = {
        isInitSuccess: false
    }

    componentWillMount = () => {
        quesList.forEach((ques) => {
            database.ref("questions/quesList").push(ques)
        });
        
        this.setState({
            isInitSuccess: true
        });
    }

    render(){
        return (
            <div>
                {this.state.isInitSuccess ? (
                    <p>初始化firebase成功</p>
                ) : (
                    <p>尚未初始化firebase</p>
                )}
            </div>
        )
    }
}

export default Init;