import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios';

const JeansUpdate = () => {
  const [data, setData] = useState({})
  const { id } = useParams();
  useEffect(() => {
    axios.get(`https://pacific-chamber-36746.herokuapp.com/resources/${id}`)
        .then(res => {
            console.log(res.data);
            setData(res.data);
        })
        .catch(err => {
            // handle error
            console.log(err);
        })
}, [])

//update data
const handleNameChange = e => {
  const updateName = e.target.value;
  const updatedData = { ...data }
  updatedData.name = updateName
  setData(updatedData);
}
const handleLinkChange = e => {
  const updateLink = e.target.value;
  const updatedData = { ...data }
  updatedData.link = updateLink
  setData(updatedData);
}
const handlePlatformChange = e => {
  const updatePlatform = e.target.value;
  const updatedData = { ...data }
  updatedData.platform = updatePlatform
  setData(updatedData);
}
const handleTypeChange = e => {
  const updateType = e.target.value;
  const updatedData = { ...data }
  updatedData.type = updateType
  setData(updatedData);
}
const handleLablesChange = e => {
  const updateLables = e.target.value;
  const updatedData = { ...data }
  updatedData.lables = updateLables
  setData(updatedData);
}
const handleExpenseChange = e => {
  const updateExpense = e.target.value;
  const updatedData = { ...data }
  updatedData.expense = updateExpense
  setData(updatedData);
}
const handleSummaryChange = e => {
  const updateSummary = e.target.value;
  const updatedData = { ...data }
  updatedData.summary = updateSummary
  setData(updatedData);
}

const handleupdate = e => {
  const newData = data;
  const url = `https://pacific-chamber-36746.herokuapp.com/resources/${id}`;
  axios.put(url, newData)
      .then(res => {
          if (res.data.modifiedCount > 0) {
              alert('succesfully updated')
          }
      })

  e.preventDefault();
}

  return (
    <div>
    <Link to='/dashboard/add-products/jeans'>
        <button className="btn btn-text"><ArrowBackIcon /></button>
    </Link>
    <div>
        <div className='px-2 mt-2'>
            <h3>Upadate Jeans data</h3>
            <h6>id: {data._id}</h6>
        </div>
        <div className="px-5 my-3">
            <form className="py-5" onSubmit={handleupdate}>
              <input style={{width:'35rem',height:'3rem'}} placeholder="Resources Name" onChange={handleNameChange} type="text" value={data.name || ''} />
                <br />
                <input style={{width:'35rem',height:'3rem'}} placeholder="Link (URL) " type="url" onChange={handleLinkChange} value={data.link || ''} />
                <br />
                <input style={{width:'35rem',height:'3rem'}} placeholder="Platform" type="text" onChange={handlePlatformChange} value={data.platform || ''} />
                <br />
                <input style={{width:'35rem',height:'3rem'}} placeholder="Type" type="text" onChange={handleTypeChange} value={data.type || ''} />
                <br />
                <input style={{width:'35rem',height:'3rem'}} placeholder="Lables (use comma to separate)" onChange={handleLablesChange} type="text" value={data.lables || ''} />
                <br />
                <input style={{width:'35rem',height:'3rem'}} placeholder="Expense (use comma to separate)" onChange={handleExpenseChange} type="text" value={data.expense || ''} />
                <br />
                <textarea style={{width:'35rem',height:'10rem'}}  className='mb-2' rows={4} placeholder="Summary" onChange={handleSummaryChange} type="text" value={data.summary || ''} />
                <br />
                <input style={{width:'35rem',height:'3rem'}} className="btn btn-primary" type="submit" value="Updated" />
            </form>
        </div>
    </div>
</div>
  )
}

export default JeansUpdate