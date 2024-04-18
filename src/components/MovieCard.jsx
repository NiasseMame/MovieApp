import React from "react";


const MovieCard = ({movie}) => {

    return (
      <>
      <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <div className="details">
      <h2>{movie.title}</h2>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Runtime:</strong> {movie.runtime}</p>
      <p><strong>Language:</strong> {movie.language}</p>
      <p><strong>Plot:</strong> {movie.plot}</p>
      </div>
      </div>
      </>
    );
  }
  
  export default MovieCard;