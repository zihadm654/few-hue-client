import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { TextField } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

export default function TemporaryDrawer({ activeCategory, handleOnSearch, handleOnClick }) {

   // drawer setup
   const [state, setState] = useState({
      left: false
   });
   const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
         return;
      }
      setState({ ...state, [anchor]: open });
   };
   const [value, setValue] = useState(null);
   // const [selectedIndex, setSelectedIndex] = React.useState(1);

   // const handleListItemClick = (event, index) => {
   //    setSelectedIndex(index);
   //    handleOnClick('all')
   // };
   //drawer lists
   const list = (anchor) => (
      <Box
         sx={{ width: 280 }}
         role="presentation"
         onClick={toggleDrawer(anchor, false)}
         onKeyDown={toggleDrawer(anchor, false)}
      >
      </Box>
   );
   return (
      <div>
         {["left"].map(anchor => (
            <React.Fragment key={anchor}>
               <Button
                  sx={{ marginRight: "2rem", color: '#000' }}
                  variant="outlined"
                  onClick={toggleDrawer(anchor, true)}>Filter</Button>
               <Drawer
                  sx={{ zIndex: 99999999 }}
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
               >
                  <div className="catagory__lists">
                     <Box
                        component="form"
                        sx={{
                           marginTop: "2rem",
                           '& > :not(style)': { m: 1, width: '90%' }
                        }}
                        noValidate
                        autoComplete="off"
                     >
                        <Button
                           sx={{ marginRight: "2rem", color: '#000' }}
                           variant="outlined"
                           onClick={toggleDrawer(anchor, false)}>Close</Button>
                        <TextField
                           onChange={handleOnSearch}
                           inputProps={{ style: { fontSize: "1.6rem" } }}
                           InputLabelProps={{ style: { fontSize: "1.6rem", fontWeight: "600" } }}
                           id="standard-basic" label="Search for products" variant="standard"
                           sx={{ fontSize: "1.7rem" }} />
                        <div className="category__inputs">
                           <h5>Categories</h5>
                           <Box>
                              <List component="nav" aria-label="secondary mailbox folder">
                                 <ListItemButton
                                    sx={{ fontSize: "1.5rem" }}
                                    onClick={() => handleOnClick('all')}
                                 // selected={selectedIndex === 2}
                                 // onClick={(event) => handleListItemClick(event, 2)}
                                 >
                                    All
                                 </ListItemButton>
                                 <ListItemButton
                                    sx={{ fontSize: "1.5rem" }}
                                    onClick={() => handleOnClick('electronics')}
                                 // selected={selectedIndex === 3}
                                 // onClick={(event) => handleListItemClick(event, 3)}
                                 >
                                    Electronics
                                 </ListItemButton>
                                 <ListItemButton
                                    sx={{ fontSize: "1.5rem" }}
                                    onClick={() => handleOnClick('jewelery')}
                                 >
                                    Jewelery
                                 </ListItemButton>
                                 <ListItemButton
                                    sx={{ fontSize: "1.5rem" }}
                                    onClick={() => handleOnClick(`men's clothing`)}
                                 >
                                    Men's Clothing
                                 </ListItemButton>
                                 <ListItemButton
                                    sx={{ fontSize: "1.5rem" }}
                                    onClick={() => handleOnClick("women's clothing")}
                                 >
                                    Women's Clothing
                                 </ListItemButton>
                              </List>
                           </Box>
                        </div>
                     </Box>
                  </div>
                  {list(anchor)}
               </Drawer>
            </React.Fragment>
         ))}
      </div>
   );
}
