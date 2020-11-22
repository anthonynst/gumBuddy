import * as types from "./actionTypes";
//statistic 
export const updateWeightAction = data => {
    return {
        type: types.UPDATE_WEIGHT_DATA,
        payload:data
    }
}
export const updateBfrAction = data =>{
    return {
        type: types.UPDATE_BFR_DATA,
        payload:data
    }
}