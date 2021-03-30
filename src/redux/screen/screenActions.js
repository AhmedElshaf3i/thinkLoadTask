import { ADD_SCREEN } from "./screenTypes"

export const addScreen=(screen)=>{
    return {
        type:ADD_SCREEN,
        payload:screen,
    }
}