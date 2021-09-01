import { ADD_STUDENT } from "../constant/type";

export const addStudent =(data)=>{
return{
    type:ADD_STUDENT,
    payload:data
}
}