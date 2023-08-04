import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Link} from 'react-router-dom';
import OrderList from './OrderList';

const DashboardHome = () => {
  return (
    <div>
        <Box sx={{ width: '100%',margin:'25px 0'}}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item md={4} xs={12}>
        <Link to="/dashboard/order-list">
         <Paper style={{height:'250px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold',fontSize:'35px',borderTop:'3px solid blue'}}>Order List</Paper>      
        </Link>
        </Grid>       
        <Grid item md={4} xs={12}>
        <Link to="/dashboard/add-products"> 
        <Paper style={{height:'250px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold',fontSize:'35px',borderTop:'3px solid blue'}}>Add Products</Paper>
        </Link>
        </Grid>
        <Grid item md={4} xs={12}>
        <Link to="/dashboard/payment">
        <Paper style={{height:'250px',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold',fontSize:'35px',borderTop:'3px solid blue'}}>Payment</Paper>
        </Link>
        </Grid>
      </Grid>
        </Box>
        <OrderList></OrderList>       
    </div>
  )
}

export default DashboardHome