


import '../styles/oneMovie.css'


const OneMovie = ({moviesFromApi, openModal}) => {

    

    return (
        <div className="movieList">
            {
                moviesFromApi ? (moviesFromApi.map(({imdbID, Title, Type, Year, Poster}) => (
                    <div key={imdbID} className="oneMovie">
                        <h2>{Title}</h2>
                        <h3>{Type}</h3>
                        <p>{Year}</p>
                        <img src={Poster} alt={Title} />
                        <div className='movieBTnContainer'>
                            <button onClick={()=> openModal(imdbID)}>More</button>
                        </div>
                    </div>

                ))) :
                    <div className='placeHolder'>Please insert valid word</div>
            }
        </div>
    )
}

export default OneMovie