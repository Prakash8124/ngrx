import { createReducer, on } from "@ngrx/store";
import { studentInterface } from "./interface";
import { ADD_REMOVE_STUDENT } from "./table.action";



const studentState:studentInterface[] = [];


export const studentReducer = createReducer(studentState , 
    on(ADD_REMOVE_STUDENT.add_student, (state, data) => data ? [...state, data] : state),
    on(ADD_REMOVE_STUDENT.remove_student, (state, data) => {
        if(data.index >= 0){
            let arr = [...state]
            arr.splice(data.index,1);
            return arr
        }
        return state
    }))