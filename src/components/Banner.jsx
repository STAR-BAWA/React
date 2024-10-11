import React from 'react';
import { movies } from './getMovies';

function Banner() {
    let movie = movies.results[0];

    return (
        <>
            {
                movie === '' ? (
                    <div>
                        {/* /loader class here */}
                        <div class="spinner-border text-primary" role="status">
                            <span class="sr-only"></span>
                        </div>
                    </div>
                ) : (
                    <div className="banner-card">
                            <img className="card-img-top" 
                             src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} 
                             alt={movie.title || movie.name} />
                        {/* <div className="card-body"> */}
                            <h5 className="card-title banner-title">{movie.title}</h5>
                            <p className="card-text banner-text">{movie.overview}</p>
                            {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                        {/* </div> */}
                    </div>
                )
            }
        </>
    );
}

export default Banner;