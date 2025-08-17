import React from 'react'

const Search = ({ searchTerm, setSearchTerm }) => {
    return (
       <div className='search flex items-center justify-between'>
            <div>
                <img src="/search.svg" alt="Search Icon" />
                <input
                    type="text"
                    placeholder='Search for a movie'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>'
        </div>
    )
}

export default Search