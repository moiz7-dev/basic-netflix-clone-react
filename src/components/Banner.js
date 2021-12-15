import React, { useEffect, useState } from 'react'

import requests from '../utils/requests';
import axios from '../utils/axios';
import classes from './Banner.module.css';

function Banner() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(requests[0].fetchUrl);
            setMovie(response.data.results[Math.floor(Math.random() * requests.length)]);

            return response;
        }
        fetchData();
    }, []);

    const truncate = (str, n) => str?.length > n ? str?.substr(0, n-1) + '...' : str;

    return (
        <header className={classes.banner} style={{
            backgroundSize: 'cover',
            backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
            backgroundPosition: 'center center',
        }}>
            <div className={classes.contents}>
                <h1 className={classes.title}>{movie?.title || movie?.name || movie?.original_name}</h1>
                
                <div className={classes.buttons}>
                    <button className={classes.button}>Play</button>
                    <button className={classes.button}>My List</button>
                </div>

                <h1 className={classes.description}>{truncate(movie?.overview, 150)}</h1>
            </div>
            
            <div className={classes.fadeBottom} />
        </header>
    )
}

export default Banner;