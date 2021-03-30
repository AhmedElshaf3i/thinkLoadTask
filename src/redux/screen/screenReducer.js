import { ADD_SCREEN } from "./screenTypes";

const generatID = (prefix) => {
    return prefix + Math.floor(Math.random() * 344546153);
};
const screenReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_SCREEN: {
            return [...state, { id: generatID("S_"), ...action.payload }]
        }
        default: return state;
    }
}
export default screenReducer;