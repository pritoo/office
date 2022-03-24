import React from 'react';
import {Box,makeStyles} from '@material-ui/core';
import company from '../Assess/images/company.jpg'
import quotes from '../Assess/images/quotes.jpg'

const useStyle = makeStyles({
  image:{
      //height: '50%',
      width: '50%'
  }
})
const Wedig = () => {
    const classes =useStyle();
  return (
    <>
    <Box style={{display:'flex'}}>
       <img className={classes.image} src={company}/>
       <img className={classes.image} src={quotes}/>
    </Box>
    </>
  )
}

export default Wedig