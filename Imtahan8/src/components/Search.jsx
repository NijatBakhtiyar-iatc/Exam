import React from 'react'
import { useGetContext } from "./getContext"

function Search() {
    const { searchValue } = useGetContext()

    function handleSubmit(e) {
        e.preventDefault()
        searchValue(e.currentTarget.search.value)
        e.currentTarget.search.value = "";
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Search a Currency</h1>
            <input type="text" name="search" placeholder='Search' />
        </form>
    )
}

export default Search