import USER_LOGIN from '../constant/type'

let initialState={
    isLogin:true,
    user:{name:'rafiq',email:'muhammadrafiq@gmail.com'}
}


const authReducer=(state=initialState,action)=>{
    switch (action.payload) {
        case "USER_LOGIN":
            let newState={
                ...state,
                isLogin:true,
                newData:action.payload
            }
            return newState
    
        default:
            return state
    }
}

export default authReducer