import React from "react";
import { connect } from "react-redux";

class PickerCanvas extends React.Component{
    state = {
        ctx: "",
    }

    componentDidMount = () => {
        this.setState({
            ctx: document.getElementById("pickerCanvas").getContext("2d")
        });
    }

    componentDidUpdate = () => {
        switch(this.props.drawingStatus){
            case "start":
                this.handleDrawingStart();

            case "end":
                this.handleDrawingEnd();

            case "drawing":
                this.handleDrawingMove();
        }
    }

    handleDrawingStart = () => {
        const ctx = this.state.ctx;

        // 繪圖
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(this.props.x, this.props.y);
    }

    handleDrawingEnd = () => {
        const ctx = this.state.ctx;

        // 繪圖
        // ctx.closePath();
    }

    handleDrawingMove = () => {
        const ctx = this.state.ctx;

        // 繪圖
        ctx.lineTo(this.props.x, this.props.y);
        ctx.stroke();
    }

    render(){
        return (
            <div>
                <canvas 
                    id="pickerCanvas" 
                    width="500px" 
                    height="400px" 
                    style={{border: "1px green solid"}}
                ></canvas>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        drawingStatus: state.canvas.drawingStatus,
        x: state.canvas.x,
        y: state.canvas.y
    }
}

export default connect(mapStateToProps)(PickerCanvas);