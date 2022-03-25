import { Table, TableBody, TableCell, TableHead, TableRow,makeStyles, Button } from '@material-ui/core';
import {useEffect,useState} from 'react'
import { getUsers,deleteUsers } from '../service/Api';
import {Link} from 'react-router-dom';

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
        //console.log(response.data)
        setUsers(response.data)
    }

    const deleteUserData =async(id) =>{
        await deleteUsers(id)
        getAllUsers();
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
                <TableCell></TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
                users.map(users => (
                    <TableRow  className={classes.row}>
                        <TableCell>{users.id}</TableCell>
                        <TableCell>{users.Name}</TableCell>
                        <TableCell>{users.Email}</TableCell>
                        <TableCell>{users.Salary}</TableCell>
                        <TableCell>{users.Phone}</TableCell>
                        <TableCell>
                            <Button variant ="containted" component={Link} to={`/edit/${users.id}`} color="primary">Edit</Button>
                            <Button variant ="containted" color="secondary" onClick={()=>deleteUserData(users.id)}>Delete</Button>
                        </TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
       </Table>
   </>
  )
}

export default Allemployee
