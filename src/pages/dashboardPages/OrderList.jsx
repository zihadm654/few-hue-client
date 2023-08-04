import React from 'react';
import Paper from '@mui/material/Paper';
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
 
const OrderList = () => {
  return (
    
           
         <Paper elevation={3} style={{minHeight:'100vh', borderTop:'3px solid lightblue'}}>
           <Typography style={{textAlign:'center',margin:'10px',color:'gray'}} variant='h4'>
            Total Order List
           </Typography>
           <Table stickyHeader aria-label="sticky table">
           <TableHead>
            <TableRow>
              <TableCell>
                Name
              </TableCell>
              <TableCell>
                Location
              </TableCell>
              <TableCell>
                Salary
              </TableCell>
              <TableCell>
                Hobbies
              </TableCell>
              <TableCell>
                 Gender
              </TableCell>
            </TableRow>
           </TableHead>
           <TableBody>
              <TableRow>
                <TableCell>
                  Pranta
                </TableCell>
                <TableCell>
                  Noakhali
                </TableCell>
                <TableCell>
                  50000
                </TableCell>
                <TableCell>
                  Reading
                </TableCell>
                <TableCell>
                  Male
                </TableCell>
              </TableRow>
           </TableBody>
           </Table>
         </Paper>               
        
     
  )
}

export default OrderList