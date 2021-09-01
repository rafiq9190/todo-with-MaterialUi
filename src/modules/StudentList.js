import  MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import { FaEdit,FaTrashAlt } from 'react-icons/fa';






const StudentList =({item,index,deleteHandler, upDateHandler})=>{
    return(
        <MuiThemeProvider>
        <>
        
    <tr >
        <td key={index}>{index+1}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.city}</td>
        <td>{item.occupation}</td>
        <td>{item.bio}</td>
        <td style={{color:"blue"}} onClick={()=>upDateHandler(item,index)}><FaEdit /></td>
        <td style={{color:"blue"}} onClick={()=>deleteHandler(index)}><FaTrashAlt/></td>
        
    </tr>

        </>
        </MuiThemeProvider>
    )
}

export default StudentList