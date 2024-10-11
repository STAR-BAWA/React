import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Movies() {
  const [currPage, setcurrPage] = useState(1); // Current page state
  const [Movies, setMovies] = useState([]); // State for storing movie results
  const [hoveredCard, setHoveredCard] = useState(null);
  const [totalPages, setTotalPages] = useState(0); // Total number of pages
  const [loading, setLoading] = useState(true); // Loading state
  const [pageArr, setPageArr] = useState([1]); // Array to keep track of displayed page numbers

  // Load movies based on the current page
  const loadMovies = async (page) => {
    setLoading(true); // Start loading
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=${page}`
    );
    const data = res.data;
    setMovies(data.results);
    setTotalPages(data.total_pages); // Set total pages from API response
    setLoading(false); // Stop loading
  };

  // Fetch movies when the component mounts and when the page changes
  useEffect(() => {
    loadMovies(currPage);
  }, [currPage]);

  const handlePageChange = (page) => {
    if (page > totalPages) return; // Prevent going beyond total pages
    if (!pageArr.includes(page)) {
      setPageArr((prevArr) => [...prevArr, page]); // Add new page to the array if not already present
    }
    setcurrPage(page); // Update current page
  };

  return (
    <>
      {loading ? (
        <div>
          {/* Loader class here */}
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
      ) : (
        <div>
          <h3 className='text-center'><strong>Trending</strong></h3>
          <div className='movies-list'>
            {Movies.map((movieObj, index) => (
              <div 
                key={index} 
                className="card movies-card" 
                onMouseEnter={() => setHoveredCard(index)}  // Set hovered card
                onMouseLeave={() => setHoveredCard(null)}  // Remove hovered card
              >
                <img
                  className="card-img-top movies-img"
                  src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                  alt={movieObj.title || movieObj.name}
                />
                <h3 className="movies-title">{movieObj.title}</h3>

                {/* Show button only when the card is hovered */}
                {hoveredCard === index && (
                  <div className="button-wrapper" style={{ display: "flex", justifyContent: "center" }}>
                    <a href="#" className='btn btn-primary movies-button'>Add to Favourite</a>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Pagination controls */}
          <div style={{ display: 'flex', justifyContent: "center" }}>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className={`page-item ${currPage === 1 ? 'disabled' : ''}`}>
                  <a className="page-link" href="#" onClick={() => handlePageChange(currPage - 1)}>Previous</a>
                </li>
                {pageArr.map((value) => (
                  <li key={value} className={`page-item ${currPage === value ? 'active' : ''}`}>
                    <a className="page-link" href="#" onClick={() => handlePageChange(value)}>
                      {value}
                    </a>
                  </li>
                ))}
                <li className={`page-item ${currPage === totalPages ? 'disabled' : ''}`}>
                  <a className="page-link" href="#" onClick={() => handlePageChange(currPage + 1)}>Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Movies;
