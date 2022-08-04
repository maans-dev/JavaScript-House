import React from 'react'
import './searchBar.css'

const SearchBar = ( {placehoder, data}) => {
  return (
    <div className='searchBar'>
        <div className='seatchInput'>
            <input type="text" />
            <div className='searchIcon'></div>
        </div>
        <div className='dataResult'>
            {data.map((value, key) => {
                return (
                 <a className='dataItem' href={value.link} >
                    {value.title} 
                 </a> )
            })}
        </div>
    </div>
  )
}

export default SearchBar
