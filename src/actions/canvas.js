import database from "../firebase/firebase";


// firebase的set()和update()都只會回傳一個甚麼都不包含的Promise
// 因此then((nothingHere) => {})裡面的函數不會被傳值
export const startSetDrawingStatusAndCoor = (drawingStatus, x, y) => {
    return () => {
        database.ref("canvas").update({
            drawingStatus, x, y
        }).then().catch((err) => {
            console.log(`喔喔，startSetDrawingStatus壞掉囉！錯誤內容：${err}`);
        });
    };
};
