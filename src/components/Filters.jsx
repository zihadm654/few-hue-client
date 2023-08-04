import React from 'react'
const Filters = () => {
   return (
      <section className='filters'>
         <div className='colors'>
            <h5>Colors</h5>
            <div className="custom-select">
               <select name="colors">
                  <option value='black'>Black</option>
                  <option value='gray'>Gray</option>
                  <option value='white'>White</option>
               </select>
               <span className="custom-arrow"></span>
            </div>
         </div>
         <div className="rating">
            <h5>Rating</h5>
            <div className="custom-select">
               <select name="rating" id="rating">
                  <option value="1">1 Star</option>
                  <option value="2">2 Star</option>
                  <option value="3">3 Star</option>
                  <option value="4">4 Star</option>
                  <option value="5">5 Star</option>
               </select>
               <span className="custom-arrow"></span>
            </div>
         </div>
         <div className='price custom-select'>
            <h5>Price</h5>
            <div className="price__inputs">
               <div className="min">
                  <label htmlFor="min">Min</label>
                  <input type="number" name="min" id="min" min="0" defaultValue="0" />
               </div>
               <div className="max">

                  <label htmlFor="max">Max</label>
                  <input type="number" name="max" id="max" max="300" defaultValue="0" />
               </div>
            </div>
         </div>
      </section >
   )
}

export default Filters