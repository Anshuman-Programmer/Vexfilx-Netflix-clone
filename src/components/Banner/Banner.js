import React, { useState ,useEffect} from 'react'
import './_banner.scss'
import axios from '../../axios/axios';
import reguests from "../../axios/Request";

function Banner() {

    const[moive,setMovie] = useState([]);

    useEffect(() => {

        async function fetchDate(){
            const request = await axios.get(reguests.fetchNetflixOriginal);
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length-1)
                ]
            )
            return request
        }

        fetchDate()

    }, []);

    console.log(moive);


    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n-1) + '...' : string
    }

    


    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url('https://image.tmdb.org/t/p/original/${moive?.backdrop_path}')`,
            backgroundPosition: " center center"
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">
                    {moive?.tittle || moive?.name || moive?.original_name}
                </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h4 className="banner__descrition">
                {truncate(moive?.overview,200)}
                </h4>
            </div>

            <div className="banner__fade"></div>
        </header>
    )
}

export default Banner
