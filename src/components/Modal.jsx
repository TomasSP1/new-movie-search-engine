import React from 'react'

import '../styles/modal.css'

const Modal = ({ closeModal, oneMovieFromAPI }) => {
    // if (!open) return null
    const { Title, Year, imdbRating, Plot, Poster, Genre, Country } = oneMovieFromAPI
    return (
        <div className='overlay'>
            <div className='movie-modal-container'>
                <img src={Poster} alt={Title} className="modal-img"/>
                <div className='modal-movie-info'>
                    <h2>TITLE: {Title}</h2>
                    <h3>GENRE: {Genre}</h3>
                    <p>COUNTRY: {Country}</p>
                    <p>PUBLISHED YEAR: {Year}</p>
                    <p>{Plot}</p>
                    <p>RATING: {imdbRating}</p>
                    <button className='closeBtn' onClick={closeModal}>CLOSE</button>
                </div>
            </div>
        </div>
    )
}

export default Modal

