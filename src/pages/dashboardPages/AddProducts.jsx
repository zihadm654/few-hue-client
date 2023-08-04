import React from 'react'
import {Link,Outlet} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


const AddProducts = () => {
  return (
    <div>
     <Box sx={{ width: '100%',margin:'25px 0'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item md={4} xs={12}>
        <Link to="/dashboard/add-products/shoes">
         <Paper style={{height:'200px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold',fontSize:'35px',borderTop:'3px solid blue'}}>Shoes</Paper>      
        </Link>
        </Grid>       
        <Grid item md={4} xs={12}>
        <Link to="/dashboard/add-products/jeans"> 
        <Paper style={{height:'200px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold',fontSize:'35px',borderTop:'3px solid blue'}}>Jeans</Paper>
        </Link>
        </Grid>
        <Grid item md={4} xs={12}>
        <Link to="/dashboard/add-products/t-shirt">
        <Paper style={{height:'200px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold',fontSize:'35px',borderTop:'3px solid blue'}}>T-Shirt</Paper>
        </Link>
        </Grid>
      </Grid>
      </Box>        
      <Outlet></Outlet>    
    </div>    
  )
}

export default AddProducts;