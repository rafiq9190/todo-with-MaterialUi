
import  MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import StudentList from './StudentList';
import userData from './data';
import{useStudent}from './useStudent'


const Student =()=>{
  
const [userInput, setUserInput,name , setName,email,
    setEmail,city , setCity,occupation, setOccupation,
    bio, setBio,errorMassage, setErrorMassage,
    upDateIndex, setUpDateIndex,flag ,setFlag,ctaUpDateHandler,upDateHandler,deleteHandler,
    ctaHandler]=useStudent()
    return (
       <MuiThemeProvider>
           <div>
           
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
        
        style={style.button}
        onClick={ctaUpDateHandler}
        />:
        <RaisedButton
        label="Submit"
        color={true}
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
        margin:15,
        background:'#3F51B5',
        font:"20px"
    }
}

export default Student