import { useState } from 'react';
import  MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import StudentList from './StudentList';
import userData from './data';


const Student =()=>{
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

    return (
       <MuiThemeProvider>
           <div>
           <AppBar title="Student Information"/>
           <br></br>
           <TextField
        hintText="Enter Your Name"
        floatingLabelText="Your Name"
        onChange={(e)=>setName(e.target.value)}
        value={name}
        />
        <br></br>
        <TextField
        hintText="Enter Your Email"
        floatingLabelText="Your Email"
        onChange={(e)=>setEmail(e.target.value)}
        value={email}
        />
        <br></br>
        <TextField
        hintText="Enter Your City"
        floatingLabelText="Your City"
        onChange={(e)=>setCity(e.target.value)}
        value={city}
        />
        <br></br>
        <TextField
        hintText="Enter Your Occuption"
        floatingLabelText="Your Occupation"
        onChange={(e)=>setOccupation(e.target.value)}
        value={occupation}
        />
        <br></br>
        <TextField
        hintText="Enter Your Bio"
        floatingLabelText="Your Bio"
        onChange={(e)=>setBio(e.target.value)}
        value={bio}
        />
        <br></br>
        {flag?
        <RaisedButton
        label="UpDate"
        primary={true}
        style={style.button}
        onClick={ctaUpDateHandler}
        />:
        <RaisedButton
        label="Submit"
        primary={true}
        style={style.button}
        onClick={ctaHandler}
        />
        }
       
        <hr></hr>
         <p style={{background:"black", color:"blue"}}>
      {
          errorMassage
      }
      </p>
       
       <br/>
            <hr/>

      <h3>Student List</h3>
<table border="1px solid" class="table table-bordered">
  <thead>
    <tr>
      <th>No</th>
      <th>Name</th>
      <th>Email</th>
      <th>City</th>
      <th>Occupation</th>
      <th>Bio</th>
      <th>Edit </th>
      <th>Delete </th>
    </tr>
  </thead>
  <tbody>
  {
        userInput.map((item , index)=>{
            return(
                <StudentList
                item={item}
                index={index}
                deleteHandler={deleteHandler}
                upDateHandler={upDateHandler}
                />
            )
        }) 
      }
     
  </tbody>
</table>
              
       
      
        </div>
        </MuiThemeProvider>
    )
}
const style={
    button:{
        margin:15
    }
}

export default Student