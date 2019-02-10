import { randomOptsSelector } from "../selectors/questions";

const questionsReducerDefaultState = {
    quesList: ["題目一", "題目二", "題目三", "題目四", "題目五", "題目六"],
    randomAns: "題目一",
    randomOpts: [], // 這個應該不需要，待拿掉
    opt: "題目二" // 這個應該不需要，待拿掉
}

export default (state = questionsReducerDefaultState, action) => {
    switch(action.type){
        case "SET_QUES":
            return {
                ...state,
                quesList: action.quesList
            };

        case "SET_RANDOM_ANS":
            return {
                ...state,
                randomAns: action.randomAns
            };

        case "SET_RANDOM_OPTS":
            return {
                ...state,
                randomOpts: randomOptsSelector(state.quesList, state.randomAns)
            }

        case "PICK_OPT":
            return {
                ...state,
                opt: action.opt
            }

        default:
            return state;
    }
}