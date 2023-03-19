import React, { useState } from 'react'

import SearchMovie from './SearchMovie'
import OneMovie from './OneMovie'
import Modal from './Modal'
import {searchMovieByID} from '../services/movieService'



const Main = () => {

  const [moviesFromApi, setMoviesFromApi] = useState([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [oneMovieFromAPI, setOneMovieFromApi] = useState([]);

  const setResults = (movies) => {
    setMoviesFromApi(movies.Search)
  };

  const setMovie = (movie) => {
    setOneMovieFromApi(movie)
    console.log(movie)
  }

  const openModal = (imdb) => {
    console.log(imdb)
    searchMovieByID(imdb).then(res => {
      setMovie(res)
      console.log(res)
    })
    setIsOpenModal(true)
    console.log('click')
  };

  const closeModal = () => {
    setIsOpenModal(false)
  }


  return (
    <div>
      <h1>Movie searching ENGINE</h1>
      <SearchMovie setResults={setResults} />
      <OneMovie moviesFromApi={moviesFromApi} openModal={openModal}/>
      {/* <Modal open={openModal} onClose={() => setOpenModal(false)}/> */}
      {isOpenModal && (
        <Modal closeModal={closeModal} oneMovieFromAPI={oneMovieFromAPI} />
      )}
    </div>
  )
}

export default Main