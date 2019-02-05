export const randomOptsSelector = (quesList, randomAns) => {
    // 複製quesList陣列避免影響到原state
    const newQuesList = quesList.slice();
    const options = [randomAns];

    // 隨機出題迴圈
    while(options.length < 4){
        const randomNum = Math.floor(Math.random() * newQuesList.length);

        if(newQuesList[randomNum] !== randomAns){
            options.push(newQuesList.splice(randomNum, 1));
        };

    };

    // 洗牌迴圈
    const shuffledOptions = [];
    while(options.length !== 0){
        shuffledOptions.push(options.splice(Math.floor(Math.random() * options.length), 1));
    };

    return shuffledOptions;
}

export const randomAnsSelector = (quesList) => {
    const randomNum = Math.floor(Math.random() * quesList.length);

    return quesList[randomNum];
}