import React, {useState} from 'react'
import './SearchBar.css'

const SearchBar = ( {placehoder, data}) => {
    const [filter, setFilter] = useState([]);

    const handleFilter = (event) => {
        const word = event.target.value
        const newFilter = data.filter((value)=>{
            return value.title.toLowerCase.includes(word.toLowerCase)
        })
    setFilter(newFilter);
    }

  return (
    <div className='searchBar'>
        <div className='seatchInput'>
            <input type="text" placeholder={placehoder} onChange={handleFilter}/>
        </div>
        {filter.length != 0 && (
        <div className='dataResult'>
            {setFilter.map((value, key) => {
                return (
                 <a className='dataItem' href={value.link} >
                   <p> {value.title} </p>
                 </a> )
            })}
        </div>
)}
    </div>
  )
}

export default SearchBar
