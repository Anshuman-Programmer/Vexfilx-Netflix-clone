import React, { useState, useEffect } from 'react'
import './_row.scss'
import axios from '../../axios/axios'

function Row({title, fetchUrl, isLargeRow = false}) {

    const [movie, setMovies] = useState([]);
    const base_url = "https://image.tmdb.org/t/p/original/"

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request
        }

        fetchData()

    }, [fetchUrl])

    console.log(movie)

    return (
        <div className="row">
            <h1 className="row__title">{title}</h1>

            <div className="row__posters">
                {movie.map((movie)=>

                    ((isLargeRow && movie.poster_path) || 
                    (!isLargeRow && movie.backdrop_path)) && 
                    (
                        <img key={movie.id} className={`row__poster ${isLargeRow && "row__posterLarge"}`} src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt="movie__Banner"/>
                    )
                    
                )}
            </div>
            
        </div>
    )
}

export default Row
