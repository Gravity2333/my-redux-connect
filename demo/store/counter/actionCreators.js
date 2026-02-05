import { ADD_NUM, SUB_NUM } from "./constants";

export function addCounterNumAction(val){
    return {
        type: ADD_NUM,
        paylaod: val,
    }
}

export function subCounterNumAction(val){
    return {
        type: SUB_NUM,
        paylaod: val,
    }
}