// import react, { Component } from 'react'
// import FormUserDetails from './FormUserDetails'
// import FormPersonalDetails from './FormPersonalDetails'
// import Confirm from './Confirm'

// export class UserForm extends Component{
// state={
//     step:1,
//     firstName:"",
//     lastName:"",
//     email:"",
//     occupation:"",
//     city:"",
//     bio:""
// }

// // process the next step

// nextStep=()=>{
//     const {step}=this.state
//     this.setState({
//         step:step+1
//     })
// }

// // previous step
// prevStep=()=>{
//     const {step}=this.state
//     this.setState({
//         step:step - 1
//     })
// }


// // handle fields change

// handleChange=input=>e=>{
//     this.setState({
//         [input]:e.target.value
//     })
// }
//     render(){
//         const {step}=this.state
//         const{firstName,lastName,email,occupation,city,bio}=this.state
//         const values={firstName,lastName,email,occupation,city,bio}
//         switch (step) {
//             case 1:
//                 return (
//                     <FormUserDetails
//                     nextStep={this.nextStep}
//                     handleChange={this.handleChange}
//                     values={values}
//                     />
//                 )
                
            
//         case 2:
//             return(
//                 <FormPersonalDetails
//                 nextStep={this.nextStep}
//                 handleChange={this.handleChange}
//                 prevStep={this.prevStep}
//                 values={values}
                
//                 />
//             )
//         case 3:
//             return(
//                 <Confirm
//                 nextStep={this.nextStep}
                
//                 prevStep={this.prevStep}
//                 values={values}
                
//                 />
//             )
//             case 4:
//             return(
//                 <h1>sucess</h1>
//             )
            

//         }
//     }
// }

// export default UserForm