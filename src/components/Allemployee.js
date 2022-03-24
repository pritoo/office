import { Table, TableBody, TableCell, TableHead, TableRow,makeStyles } from '@material-ui/core';
import {useEffect,useState} from 'react'
import { getUsers } from '../service/Api';
const useStyle=makeStyles({
    table:{
       width:'90%',
       margin:'50px 0 0 50px'
    },
    thead:{
       ' & > *':{
       background:'#000000',
       color:'#ffffff',
       fontSize:'20px'
       },
    },
    ' & > *':{
        row:{
            fontSize:'20px' 
        }
    }
    
})

const Allemployee = () => {
    const [users,setUsers]= useState([]);
    const classes =useStyle();
    
    useEffect(()=>{
        getAllUsers();
    },[])
    
    const getAllUsers = async() => {
        const response=await getUsers()
        console.log(response.data)
        setUsers(response.data)
    }
  return (
   <>
       <Table className={classes.table}>
        <TableHead>
            <TableRow className={classes.thead}>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>salary</TableCell>
                <TableCell>phone-number</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
                users.map(users => (
                    <TableRow  className={classes.row}>
                        <TableCell>{users.id}</TableCell>
                        <TableCell>{users.name}</TableCell>
                        <TableCell>{users.email}</TableCell>
                        <TableCell>{users.salary}</TableCell>
                        <TableCell>{users.phone}</TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
       </Table>
   </>
  )
}

export default Allemployee