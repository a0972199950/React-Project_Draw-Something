// 建立canvas的第一步驟：取得元素id後為其建立渲染環境
// 所謂渲染環境類似為canvas初始化，要定義作畫方式("2d", "webgl", ...)、以及其他的基本設定等等...
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.lineWidth = 5;

// canvas唯一支援的圖形繪製：方形
const drawRect = () => {
    // 繪製一個實心填滿的方形。四個參數分別為：
    // 距離原點的x座標、距離原點的y座標、方形的寬、方形的高
    ctx.fillRect(25, 25, 100, 100);

    // 清空一個方形區域。參數同上
    ctx.clearRect(45, 45, 60, 60);

    // 繪製一個空心只有邊框的方形。參數同上
    ctx.strokeRect(50, 50, 50, 50);
};

// drawRect();


// canvas的繪製路徑示範。以繪製三角形為例
const drawTri = () => {
    // 必須，宣告接下來將要開始定義路徑的座標點
    ctx.beginPath();

    // 必須，宣告初始座標點。參數為：距離原點的x座標、距離原點的y座標
    ctx.moveTo(200, 200);

    // 非必須，宣告第二個以後的座標點
    ctx.lineTo(250, 170);
    ctx.lineTo(250, 230);

    // 渲染圖形的方式，有兩種。第一種為fill()，會自動將最後一個lineTo()的座標點和起始點連起來，並繪製一個填滿的突襲
    ctx.fill();

    // 第二種為stroke()，只會繪製所有座標點連起來的直線。注意其不會自動將最後一個lineTo()的座標點和起始點連起來
    // ctx.stroke();

    // 若想繪製一個完整連接頭尾的框線圖，需在呼叫stroke()之前呼叫closePath()來閉合圖形
    // ctx.closePath();
    // ctx.stroke();
}

// drawTri();


const drawHappyFace = () => {
    ctx.beginPath();
    ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    ctx.moveTo(110, 75);
    ctx.arc(75, 75, 35, 0, Math.PI, false); // Mouth (clockwise)
    ctx.moveTo(65, 65);
    ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Left eye
    ctx.moveTo(95, 65);
    ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Right eye
    ctx.stroke();
};

// drawHappyFace();


// 因為js的addEventListener()無法一次綁定多個事件，因此自創一個函式處理
const addListenerMulti = (element, eventNames, listener) => {
    const events = eventNames.split(' ');
    for (let i = 0; i < events.length; i++) {
        if(events[i].includes("touch")){
            element.addEventListener(events[i], (e) => {listener(e, "touch");}, false);
        } else{
            element.addEventListener(events[i], (e) => {listener(e);}, false);
        }
        
    }
}

const handleStart = (e, device) => {
    isDrawing = true;

    const x = !device ? (e.offsetX) : (e.targetTouches[0].pageX - canvas.offsetLeft);
    const y = !device ? (e.offsetY) : (e.targetTouches[0].pageY - canvas.offsetTop);

    ctx.beginPath();
    ctx.moveTo(x, y);
};

const handleEnd = () => {
    isDrawing = false;

    ctx.closePath();
};

const handleMove = (e, device) => {
    e.preventDefault();
    if (isDrawing) {
        const x = !device ? (e.offsetX) : (e.targetTouches[0].pageX - canvas.offsetLeft);
        const y = !device ? (e.offsetY) : (e.targetTouches[0].pageY - canvas.offsetTop);

        ctx.lineTo(x, y);
        ctx.stroke();
    };
};


let isDrawing = false;
addListenerMulti(canvas, "mousedown touchstart", handleStart);
addListenerMulti(canvas, "mouseup mouseleave touchend", handleEnd);
addListenerMulti(canvas, "mousemove touchmove", handleMove);

