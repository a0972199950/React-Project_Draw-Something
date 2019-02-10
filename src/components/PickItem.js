import React from "react";

class PickItem extends React.Component{
    onPickOpt(e){
        const opt = e.target.value;
        this.props.handlePickOpt(opt);
    }

    render(){
        return (
            <div>
                <button value={this.props.randomOpt} onClick={(e) => {
                    this.onPickOpt(e);
                }}>{this.props.randomOpt}</button>
            </div>
        )
    }    
};


export default PickItem;