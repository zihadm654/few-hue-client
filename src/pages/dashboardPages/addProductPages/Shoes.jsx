import React,{useState,useEffect}from 'react'
import ShoesForm from '../addForm/ShoesForm';
import ShoesTable from '../productTable/ShoesTable';
import { Modal,Box,Button,Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Jeans = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
   <>
      <Button variant='contained' onClick={handleOpen}>
        <AddIcon sx={{ mr: 1 }} />Add Shoes
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={{ ...style, width: 500 }}>
        <Typography style={{textAlign:'center'}} variant="h5">
        Add Shoes Data
        </Typography>         
        <ShoesForm></ShoesForm> 
        </Box>
      </Modal>
            
      
      <ShoesTable></ShoesTable>
    </>
  )
}

export default Jeans