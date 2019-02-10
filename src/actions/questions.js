import database from "../firebase/firebase";

import { randomAnsSelector } from "../selectors/questions";

// 題目清單相關函式
export const setQues = (quesList) => {
    return {
        type: "SET_QUES",
        quesList
    }
    
};

export const startFatchQuesList = () => {
    return (dispatch) => {
        database.ref("questions/quesList").once("value").then((snapshot) => {
            // 解析firebase類陣列資料成陣列
            const quesList = [];

            snapshot.forEach((childSnapshot) => {
                quesList.push(childSnapshot.val());
            });

            // 將firebase資料dispatch進react state
            dispatch(setQues(quesList));
        })
    }
    
}


// 生成隨機答案
export const setRandomAns = (randomAns) => {
    return {
        type: "SET_RANDOM_ANS",
        randomAns
    }    
};

export const startSetRandomAns = () => {
    return (dispatch, getState) => {
        const quesList = getState().questions.quesList;
        const randomAns = randomAnsSelector(quesList);

        database.ref("questions").update({ randomAns }).then(() => {
            dispatch(setRandomAns(randomAns));
        }).catch((err) => {
            console.log(`喔喔，startSetRanfomAns壞掉囉！錯誤內容：${err}`);
        })
    }
}



// 生成隨機選項
export const setRandomOpts = () => {
    return {
        type: "SET_RANDOM_OPTS"
    }    
};



// 選擇答案
export const pickOpt = (opt) => {
    return {
        type: "PICK_OPT",
        opt
    };
};
