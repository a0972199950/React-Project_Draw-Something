import React from "react";

import database from "../firebase/firebase";

class PickerCanvas extends React.Component{
    state = {
        ctx: "",
        drawingStatus: "end",
        x: 0,
        y: 0,
        canvasWidth: 0,
        canvasHeight: 0
    }

    componentDidMount = () => {
        const canvas = document.getElementById("pickerCanvas");

        this.setState({
            ctx: canvas.getContext("2d"),
            canvasWidth: canvas.width,
            canvasHeight: canvas.height
        });

        // firebase的on()不回傳Promise，而是直接接受一個callback function做為第二個參數
        database.ref("canvas").on("value", (snapshot) => {
            const { drawingStatus, percentX, percentY } = snapshot.val();
            const x = percentX * this.state.canvasWidth;
            const y = percentY * this.state.canvasHeight;
            
            this.setState({
                drawingStatus, x, y
            })
        })
    }

    componentWillUnmount = () => {
        database.ref("canvas").off();
    }

    componentDidUpdate = () => {
        switch(this.state.drawingStatus){
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
        ctx.moveTo(this.state.x, this.state.y);
    }

    handleDrawingEnd = () => {
        const ctx = this.state.ctx;

        // 繪圖
        ctx.closePath();
    }

    handleDrawingMove = () => {
        if(this.state.drawingStatus === "drawing"){
            const ctx = this.state.ctx;

            // 繪圖
            ctx.lineTo(this.state.x, this.state.y);
            ctx.stroke();
        }
        
    }

    render(){
        return (
            <div>
                <canvas 
                    id="pickerCanvas" 
                    width="400px" 
                    height="300px" 
                    style={{border: "1px green solid"}}
                ></canvas>
            </div>
        )
    }
}


export default PickerCanvas;