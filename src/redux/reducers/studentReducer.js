import ADD_STUDENT from '../constant/type'



let initialState={
    name:'refiq',
    email:'naveed sarwar',
    city:'fsd',
    occuption:'developer',
    bio:"development",
    student:[],
}

const studentReducer =(state=initialState,action)=>{

    switch (action.type) {
        case "ADD_STUDENT":
            let newState={
                ...state,
                name:'sir Naveed',
                newData:action.payload
            }
            return newState
    
        default:
            return state
    }


}

export default studentReducer