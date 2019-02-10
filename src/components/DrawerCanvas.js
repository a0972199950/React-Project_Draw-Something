import React from "react";
import { connect } from "react-redux";

import { startSetDrawingStatusAndCoor } from "../actions/canvas";

class DrawerCanvas extends React.Component{
    state = {
        canvas: "",
        ctx: "",
        isDrawing: false,
        canvasWidth: 0,
        canvasHeight: 0
    }

    componentDidMount = () => {
        const canvas = document.getElementById("drawerCanvas");

        this.setState({
            canvas,
            ctx: canvas.getContext("2d"),
            canvasWidth: canvas.width,
            canvasHeight: canvas.height
        });        
    }

    handleDrawingStart = (e, device) => {
        this.setState({
            isDrawing: true
        });

        // React的event並不是js原生的event，而是一個react自創的物件，裡面「包含」了原生event
        // 該原生event可透過e.nativeEvent來取得
        const canvas = this.state.canvas;
        const x = device !== "touch" ? (e.nativeEvent.offsetX) : (e.nativeEvent.targetTouches[0].pageX - canvas.offsetLeft);
        const y = device !== "touch" ? (e.nativeEvent.offsetY) : (e.nativeEvent.targetTouches[0].pageY - canvas.offsetTop);
        const ctx = this.state.ctx;

        // 繪圖
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(x, y);

        // 更新status
        const percentX = x / this.state.canvasWidth;
        const percentY = y / this.state.canvasHeight;
        this.props.startSetDrawingStatusAndCoor("start", percentX, percentY);
    }

    handleDrawingEnd = () => {
        this.setState({
            isDrawing: false
        });

        // 繪圖
        const ctx = this.state.ctx;
        // ctx.closePath();

        // 更新status
        this.props.startSetDrawingStatusAndCoor("end", 0, 0);
    }

    handleDrawingMove = (e, device) => {
        if(this.state.isDrawing){
            // React的event並不是js原生的event，而是一個react自創的物件，裡面「包含」了原生event
            // 該原生event可透過e.nativeEvent來取得
            const canvas = this.state.canvas;
            const x = device !== "touch" ? (e.nativeEvent.offsetX) : (e.nativeEvent.targetTouches[0].pageX - canvas.offsetLeft);
            const y = device !== "touch" ? (e.nativeEvent.offsetY) : (e.nativeEvent.targetTouches[0].pageY - canvas.offsetTop);
            const ctx = this.state.ctx;

            // 繪圖
            ctx.lineTo(x, y);
            ctx.stroke();

            // 更新state
            const percentX = x / this.state.canvasWidth;
            const percentY = y / this.state.canvasHeight;
            this.props.startSetDrawingStatusAndCoor("drawing", percentX, percentY);
        }
    }

    render(){
        return (
            <div>
                <canvas 
                    id="drawerCanvas" 
                    width="500px" 
                    height="400px" 
                    style={{border: "1px black solid"}}
                    onMouseDown={e => this.handleDrawingStart(e, "click")}
                    onTouchStart={e => this.handleDrawingStart(e, "touch")}

                    onMouseUp={() => this.handleDrawingEnd()}
                    onMouseLeave={() => this.handleDrawingEnd()}
                    onTouchEnd={() => this.handleDrawingEnd()}

                    onMouseMove={e => this.handleDrawingMove(e, "click")}
                    onTouchMove={e => this.handleDrawingMove(e, "touch")}
                ></canvas>
            </div>
        )
        
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        startSetDrawingStatusAndCoor: (drawingStatus, percentX, percentY) => {
            dispatch(startSetDrawingStatusAndCoor(drawingStatus, percentX, percentY));
        }
    };
}


export default connect(undefined, mapDispatchToProps)(DrawerCanvas);