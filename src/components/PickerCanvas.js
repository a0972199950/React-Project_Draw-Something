import React from "react";

import database from "../firebase/firebase";

class PickerCanvas extends React.Component{
    state = {
        ctx: "",
        drawingStatus: "end",
        x: 0,
        y: 0
    }

    componentDidMount = () => {
        this.setState({
            ctx: document.getElementById("pickerCanvas").getContext("2d")
        });

        // firebase的on()不回傳Promise，而是直接接受一個callback function做為第二個參數
        database.ref("canvas").on("value", (snapshot) => {
            const { drawingStatus, x, y } = snapshot.val();
            
            this.setState({
                drawingStatus, x, y
            })
        })
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
                    width="500px" 
                    height="400px" 
                    style={{border: "1px green solid"}}
                ></canvas>
            </div>
        )
    }
}


export default PickerCanvas;