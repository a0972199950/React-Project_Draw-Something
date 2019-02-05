export const setQues = (quesList) => {
    return {
        type: "SET_QUES",
        quesList
    }
    
};

export const setRandomAns = (randomAns) => {
    return {
        type: "SET_RANDOM_ANS",
        randomAns
    }    
};

export const setRandomOpts = () => {
    return {
        type: "SET_RANDOM_OPTS"
    }    
};

export const pickOpt = (opt) => {
    return {
        type: "PICK_OPT",
        opt
    }
}
