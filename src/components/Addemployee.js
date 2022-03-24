import React, { useState } from 'react'
import { Button, FormControl, FormGroup, InputLabel,Input, makeStyles, Typography} from '@material-ui/core';

const useStyle=makeStyles({
    container:{
        width:'50%',
        margin:'5% 0 0 25%',
        ' & > *':{
            marginTop:'20px'
        }
    }
    
})

const initialValues={
    Name: " ",
    Email: " ",
    Salary: " ",
    Phone : " "
}



const Addemployee = () => {
    const [users,setUsers]=useState(initialValues); 
    const [Name,Email,Salary,Phone]=users
    const classes =useStyle();
    const onValueChange=(e)=>{
    //console.log(e.target.value)
    setUsers({...users,[e.target.name]:e.target.value})
    }
  return (
    <>
   
       <FormGroup  className={classes.container}>
       <Typography variant="h4">Add User</Typography>
           <FormControl>
               <InputLabel>Name</InputLabel>
                   <Input onChange={(e) => onValueChange(e)} name='Name' value={Name}/>    
           </FormControl>
           <FormControl>
               <InputLabel>Email</InputLabel>
                   <Input onChange={(e) => onValueChange(e)} name='Email' value={Email}/>    
           </FormControl>
           <FormControl>
               <InputLabel>Salary</InputLabel>
                   <Input onChange={(e) => onValueChange(e)} name='Salary' value={Salary}/>    
           </FormControl>
           <FormControl>
               <InputLabel>Phone</InputLabel>
                   <Input onChange={(e) => onValueChange(e)} name='Phone' value={Phone}/>    
           </FormControl>
           <Button variant="contained" color="primary">Add User</Button>
       </FormGroup>
    </>
  )
}

export default Addemployee