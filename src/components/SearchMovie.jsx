import { useState, useEffect } from 'react'
import {searchMovie} from '../services/movieService';

import '../styles/searchMovie.css'



const SearchMovie = ({ setResults }) => {

    const [searchWord, setSearchWord] = useState('');
    const [newWord, setNewWord] = useState('');


    const handleClick = (zodis_atnestas_is_inputo) => {
        setNewWord(zodis_atnestas_is_inputo)
        setSearchWord('')

    }

    const getMovies = (zodis_atnestas_is_inputo) => {
        searchMovie(zodis_atnestas_is_inputo).then(res => {
            setResults(res)
            console.log(res)
        })
    }

    useEffect(() => {
        getMovies(newWord);
    }, [newWord])

    return (
        <div className='searchingContainer'>
            <input
                type="text"
                value={searchWord}
                onChange={event => setSearchWord(event.target.value)} />
            <div className='searchButtonContainer'>
                <button onClick={() => handleClick(searchWord)}>Search</button>
            </div>
        </div>
    )
}

export default SearchMovie

