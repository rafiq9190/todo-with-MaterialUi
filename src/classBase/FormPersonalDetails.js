// import React from 'react';
// import  MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
// import TextField from 'material-ui/TextField';
// import RaisedButton from 'material-ui/RaisedButton';

// class FormPersonalDetails extends React.Component{
//      progress= (e)=>{
        
//         this.props.nextStep()
//     }
//      back=(e)=>{
        
//         this.props.prevStep()
//     }
//     render(){
//         const {nextStep,prevStep,values,handleChange}=this.props
//         return(
//             <MuiThemeProvider>
//                 <>
//                 <AppBar title="Enter Your Personal Details"/>
//                 <TextField
//                 hintText="Occuption"
//                 floatingLabelText="Your Occupation"
//                 onChange={handleChange('occupation')}
//                 defaultValue={values.occupation}
//                 />
//                 <br></br>
//                 <TextField
//                 hintText="Enter Your City"
//                 floatingLabelText="Your City"
//                 onChange={handleChange('city')}
//                 defaultValue={values.city}
//                 />
//                 <br>
//                 </br>
//                 <TextField
//                 hintText="Enter your Bio"
//                 floatingLabelText="Bio"
//                 onChange={handleChange('bio')}
//                 defaultValue={values.bio}
//                 />
//                 <br></br>
//                 <RaisedButton
//                 label="Continue"
//                 primary={true}
//                 style={style.button}
//                 onClick={this.progress()}
      
//                 ></RaisedButton>
      
//       <RaisedButton
//                 label="Back"
//                 primary={false}
//                 style={style.button}
//                 onClick={this.back()}
      
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
// export default FormPersonalDetails