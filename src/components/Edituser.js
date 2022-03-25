import React, { useEffect, useState } from 'react';
import { Button, FormControl, FormGroup, InputLabel,Input, makeStyles, Typography} from '@material-ui/core';
import {editUsers,getUsers} from '../service/Api';
import { useNavigate,useParams} from 'react-router-dom';

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

const Edituser = () => {
    const [users,setUsers]=useState(initialValues); 
    const {Name,Email,Salary,Phone}=users;
    const {id} = useParams();
    const classes =useStyle();
    const Navigate = useNavigate()

    useEffect(()=>{
        loadUserData()
    },[])

    const loadUserData =async() =>{
       const response=await getUsers(id);
       setUsers (response.data)
    }
    
const onValueChange=(e)=>{
    //console.log(e.target.value)
    setUsers({...users,[e.target.name]:e.target.value})
    }

const editUserDetails= async()=>{
await editUsers(id,users)
Navigate('/all');
}
  return (
    <>
   
       <FormGroup  className={classes.container}>
       <Typography variant="h4">Edit User</Typography>
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
           <Button variant="contained" onClick={()=>editUserDetails()} color="primary">Edit User</Button>
       </FormGroup>
    </>
  )
}

export default Edituser