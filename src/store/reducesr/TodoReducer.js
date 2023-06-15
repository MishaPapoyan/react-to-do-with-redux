import {TodoTypes} from "../types";
import {logDOM} from "@testing-library/react";


export default (state = [], action) => {
    const {type, payload} = action
    switch (type){
        case TodoTypes.ADD_TODO:
            return [...state, payload]
        case TodoTypes.DELETE_TODO:
            const tmp = [...state]
            const index = tmp.findIndex((element) => element.id === payload.id)
            if (index === -1){
                return state
            }else {
                tmp.splice(index,1)
                return tmp
            }
        case TodoTypes.CHANGE_STATUS:
            return { ...state, payload: !state.isDone }
    }
    return state;

}