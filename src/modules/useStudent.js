import { useState } from "react"
import userData from "./data"


export const useStudent=()=>{
    const [userInput, setUserInput] =useState([])
    const [name , setName] = useState()
    const[ email, setEmail] = useState()
    const [city , setCity] = useState()
    const [occupation, setOccupation]=useState()
    const [bio, setBio]= useState();
    const [errorMassage, setErrorMassage]= useState(false)
    const [upDateIndex, setUpDateIndex]=useState()
    const [flag ,setFlag] = useState(false)

 const  ctaHandler=()=>{
     setErrorMassage('')
     if(name!="" && email != "" && city!=""&& occupation!="" && bio!=""){
        let newStudent={
            name,
            email,
            city,
            occupation,
            bio
        }
        setUserInput([newStudent,...userInput])
        setName('')
        setEmail('')
        setCity('')
        setOccupation('')
        setBio('')
        
     }else{
         setErrorMassage('All feids require')
     }
      
  }

  const deleteHandler=(index)=>{
    const newStd = userInput.filter((item,i)=>{
        if(i != index){
            return item
        }
    })
    setUserInput([...newStd])
  }

  const upDateHandler=(item,index)=>{
    setUpDateIndex(index);
    setName(item.name);
    setEmail(item.email);
    setCity(item.city);
    setOccupation(item.occupation);
    setBio(item.bio);
    setFlag(true);
    
  }

  const ctaUpDateHandler =()=>{
    setErrorMassage('')
    if(name!="" && email != "" && city!=""&& occupation!="" && bio!=""){
       let newStu={
           name,
           email,
           city,
           occupation,
           bio

       }
       let updateStudent= userInput.map((st, index)=>{
        if(upDateIndex === index){
          return newStu
        }else{
          return st
        }
      })
       setUserInput([...updateStudent])
       setName('')
       setEmail('')
       setCity('')
       setOccupation('')
       setBio('')
       setFlag(false)
       
    }else{
        setErrorMassage('All feids require')
    }
  
}
    
    

    
    return[userInput, setUserInput,name , setName,email,
         setEmail,city , setCity,occupation, setOccupation,
         bio, setBio,errorMassage, setErrorMassage,
         upDateIndex, setUpDateIndex,flag ,setFlag,
         ctaUpDateHandler,upDateHandler,deleteHandler,
         ctaHandler
 ]
}
export default useStudent