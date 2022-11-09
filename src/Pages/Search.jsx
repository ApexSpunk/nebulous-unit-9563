import React from 'react'
import "./Search.css"

const Search = () => {
  const searchClick=()=>{
    <h1>hi</h1>
  }
  return (
    <div className='search_parent'>
        <input type="text" placeholder='ENTER SEARCH TERMS' className='search' onClick={()=>searchClick()} />
   
        <div className='container'>
          <div className='container1'>
            <h1>TRENDS</h1>
            <p>DRESS</p>
            <p>TOP</p>
            <p>SKIRT</p>
            <p>DRESS FOR WOMAN</p>
          </div>
          <div className='container2'>
        
          </div>
        </div>
    </div>

    
    
  )
}

export default Search
