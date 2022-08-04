import React from 'react'
import './SearchBar.css'

const SearchBar = ( {placehoder, data}) => {
  return (
    <div className='searchBar'>
        <div className='seatchInput'>
            <input type="text" />
        </div>
        <div className='dataResult'>
            {data.map((value, key) => {
                return (
                 <a className='dataItem' href={value.link} >
                   <p> {value.title} </p>
                 </a> )
            })}
        </div>
    </div>
  )
}

export default SearchBar
