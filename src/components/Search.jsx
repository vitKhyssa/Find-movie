import React, {useState}  from 'react';


const Search = (props) => {
    const {
        searchMovies = Function.prototype,
    } = props
    const [search, setSearch] = useState(localStorage.getItem('str'))
    const [type , setType] = useState('all')

   const handleKey = (event) => {
        if (event.key === 'Enter') {
            searchMovies(search, type)
        }
    }
    const handleFilter = (event) => {
        setType(event.target.dataset.type);
        searchMovies(search , event.target.dataset.type)
    }
        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field">
                        <input
                            className="validate"
                            placeholder="S Movie"
                            type="search"
                            value={search}
                            onChange={(e) => {
                                localStorage.setItem("str" , e.target.value)
                                setSearch(e.target.value)
                            }}
                            onKeyDown={handleKey}
                        />
                        <button className='btn search-btn'
                                onClick={() => searchMovies(search, type )}>Search
                        </button>
                    </div>
                </div>
                <div>
                    <label>
                        <input
                            name="type"
                            type="radio"
                            data-type='all'
                            onChange={handleFilter}
                            checked={type === 'all'}
                        />
                        <span>All</span>
                    </label>
                    <label>
                        <input
                            name="type"
                            type="radio"
                            data-type='movie'
                            onChange={handleFilter}
                            checked={type === 'movie'}
                        />
                        <span>Only Movies</span>
                    </label>
                    <label>
                        <input
                            name="type"
                            type="radio"
                            data-type='series'
                            onChange={handleFilter}
                            checked={type === 'series'}
                        />
                        <span>Only Serial</span>
                    </label>
                </div>
            </div>
        )
    }

export default Search;
