// import  MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import AppBar from 'material-ui/AppBar';
// import {List,ListItem} from 'material-ui/List';
// import RaisedButton from 'material-ui/RaisedButton';
// import React from 'react';

// export class Confirm extends React.Component{
//      progress= (e)=>{
//         e.preventDefault()
//        this.props. nextStep()
//     }
//     back=(e)=>{
//         e.preventDefault();
//        this.props. prevStep()
//     }
    
//     render(){
//         const {values:{firstName,lastName,email,occupation,city,bio}}= this.props
//         return(
//             <MuiThemeProvider>
//                 <>
//                 <AppBar title="Confirm User Details"/>
//                 <List>
//                     <ListItem 
//                     primaryText="First Name"
//                     secondary={firstName}
//                    />
//                    <ListItem 
//                     primaryText="Last Name"
//                     secondary={lastName}
//                    />
//                    <ListItem 
//                     primaryText="Email Address"
//                     secondary={email}
//                    />
//                    <ListItem 
//                     primaryText="Occupation"
//                     secondary={occupation}
//                    />
//                    <ListItem 
//                     primaryText="City"
//                     secondary={city}
//                    />
//                    <ListItem 
//                     primaryText="Bio"
//                     secondary={bio}
//                    />
                        
                    
//                 </List>
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
// export default Confirm