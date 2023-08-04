import React from 'react'
import axios from 'axios';
import { useForm } from "react-hook-form";

const JeansForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = data => {
      console.log(data);
      axios.post('https://pacific-chamber-36746.herokuapp.com/courses', data)
           
          .then(res => {
              if (res.data.insertedId) {
                  
                  reset();
              }
          })
  }
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center'}} >
        <form onSubmit={handleSubmit(onSubmit)}>
                    <input style={{width:'30rem',height:'3rem'}}   required placeholder="Course Name" type="text" {...register("name")} />
                    <br />
                    <input  style={{width:'30rem',height:'3rem'}} placeholder="Link (URL) " type="url" {...register("link")} />
                    <br />
                    <input  style={{width:'30rem',height:'3rem'}} placeholder="Platform" type="text" {...register("platform")} />
                    <br />
                    <input  style={{width:'30rem',height:'3rem'}} placeholder="Price" type="text" {...register("price")} />
                    <br />
                    <input  style={{width:'30rem',height:'3rem'}} placeholder="Currency" type="text" {...register("currency")} />
                    <br />
                    <input style={{width:'30rem',height:'3rem'}} className="btn btn-primary" type="submit" value="Add" />
        </form>
    </div>
  )
}

export default JeansForm