import React from 'react'

const Search = ({ searchTerm }) => {
  return (
    <div>
        <h2>{searchTerm} Images</h2>
        <Container searchTerm={searchTerm} />
    </div>
  )
}

export default Search