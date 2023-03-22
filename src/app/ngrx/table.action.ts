import { createActionGroup, props } from "@ngrx/store";
import { studentInterface } from "./interface";

export const ADD_REMOVE_STUDENT = createActionGroup({
    source: 'ADD_REMOVE_STUDENT',
    events:{
        'ADD_STUDENT': props<studentInterface>(),
        'REMOVE_STUDENT': props<{ index:number }>()
    }
})