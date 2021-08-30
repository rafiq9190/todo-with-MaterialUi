// import  MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
// import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton';
// import React from 'react';


// export class FormUserDetails extends React.Component{

//     progress= (e)=>{
        
//         this.props.nextStep()
//     }
    
//     render(){
//         const {values,handleChange,nextStep}= this.props
//         return(
//             <MuiThemeProvider>
//                 <>
//                 <AppBar title="Enter User Details"/>
//                 <TextField
//                 hintText="Enter the First Name"
//                 floatingLabelText="First Name"
//                 onChange={handleChange('firstName')}
//                 defaultValue={values.firstName}
//                 />
//                 <br></br>
//                 <TextField
//                 hintText="Enter the Last Name"
//                 floatingLabelText="Last Name"
//                 onChange={handleChange('lastName')}
//                 defaultValue={values.lastName}
//                 />
//                 <br>
//                 </br>
//                 <TextField
//                 hintText="Enter your Email Address"
//                 floatingLabelText="Email Address"
//                 onChange={handleChange('email')}
//                 defaultValue={values.email}
//                 />
//                 <br></br>
//                 <RaisedButton
//                 label="Continue"
//                 primary={true}
//                 style={style.button}
//                 onClick={this.progress()}
      
//                 ></RaisedButton>
      
//                 </>
      
//             </MuiThemeProvider>
//           )
//     }
// }

// const style={
//     button:{
//         margin:15
//     }
// }
// export default FormUserDetails