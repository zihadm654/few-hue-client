import React from 'react'
import Button from "../components/Button"
const Phenomena = () => {
   return (
      <section className='phenomena'>
         <div className="phenomena__img">
            <img src="https://elevennewyork.com/wp-content/uploads/2018/09/kylian-mbappe-e1600196591867.gif" alt="icon" />
         </div>
         <div className="phenomena__desc">
            <h5>From the Journal</h5>
            <h2>Kylian Mbappé
               The French Phenomenon</h2>
            <p>If you were to build a talent from scratch—a kind of superhuman football prodigy—you’d probably start with the genes. Give the kid a father who’s an ex-footballer and now a coach, and a mother who has played, say, professional handball. Place him in one of the hotspots for youth development, like the suburbs of Paris. Make him mature, disciplined and obsessed with self-improvement. Then let him play for a local club and watch him fly.</p>
            <Button site="/journal" text='Read More' />
         </div>
      </section>
   )
}

export default Phenomena