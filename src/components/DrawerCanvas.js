import React from "react";
import { connect } from "react-redux";

class DrawerCanvas extends React.Component{
    state = {
        canvas: "",
        ctx: "",
        isDrawing: false
    }

    componentDidMount = () => {
        this.setState({
            canvas: document.getElementById("drawerCanvas"),
            ctx: document.getElementById("drawerCanvas").getContext("2d")
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

        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(x, y);
    }

    handleDrawingEnd = () => {
        this.setState({
            isDrawing: false
        });

        const ctx = this.state.ctx;
        ctx.closePath();
    }

    handleDrawingMove = (e, device) => {
        if(this.state.isDrawing){
            // React的event並不是js原生的event，而是一個react自創的物件，裡面「包含」了原生event
            // 該原生event可透過e.nativeEvent來取得
            const canvas = this.state.canvas;
            const x = device !== "touch" ? (e.nativeEvent.offsetX) : (e.nativeEvent.targetTouches[0].pageX - canvas.offsetLeft);
            const y = device !== "touch" ? (e.nativeEvent.offsetY) : (e.nativeEvent.targetTouches[0].pageY - canvas.offsetTop);
            const ctx = this.state.ctx;

            ctx.lineTo(x, y);
            ctx.stroke();
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


export default DrawerCanvas;