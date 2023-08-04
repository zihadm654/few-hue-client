import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Table } from 'react-bootstrap'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from 'react-router-dom';

const ShoesTable = () => {
        const [data, setData] = useState([]);
         
    
        useEffect(() => {
            axios.get('https://pacific-chamber-36746.herokuapp.com/resources')
                
                .then(res => {
                    setData(res.data);
                     
                })
                .catch(err => {
                    // handle error
                    console.log(err);
                })
        }, [])
    
        // delete action 
        const handleDelete = id => {
            const procced = window.confirm('Are you sure, you want to delete?');
            if (procced) {
                const url = `https://pacific-chamber-36746.herokuapp.com/resources/${id}`;
                 
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            alert('Entry Deleted')
                            window.location.reload();
                        }
                    });
            }
        }
    
  return (
    <div className='my-5'>
        <h4>Shoes table</h4>
        <Table responsive>
   <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Link</th>
      <th>Platform</th>
      <th>Type</th>
      <th>labels</th>
      <th>Pricing</th>
      <th>Summary</th>
      <th colSpan={2}>Action</th>
       
    </tr>
  </thead>
  <tbody>
   {data.map(d=><tr>
      <td>{"Reso" + d._id.slice(20)}</td>    
      <td>{d.name ? d.name : ''}</td>    
      <td>1</td>    
      <td>1</td>    
      <td>1</td>    
      <td>1</td>    
      <td>1</td>    
      <td>1</td>    
      <td>
        <Link to={`/dashboard/add-products/jeans-update/${d._id}`}>
        <div style={{ color:'blue', cursor:'pointer'}} title='edit'>
         <EditIcon/>
        </div>
        </Link>         
      </td>    
      <td>  
         <div style={{ color:'red', cursor:'pointer'}}
         title='delete' onClick={() => handleDelete(d._id)}>
          <DeleteForeverIcon/>  
          </div>
      </td>    
    </tr>)}
    
     
  </tbody>
</Table>
    </div>
  )
}

export default ShoesTable