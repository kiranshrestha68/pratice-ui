import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./card.css";
import axios from "axios";
import { getMovies } from "../../redux/action/productaction";

const Card = () => {
  const movies = useSelector((state) => state.allmovies.movies);
  const dispatch = useDispatch();

  const fetchmovies = async () => {
    const res = await axios
      .get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=aedb786bf1632adab2d897e9149fb89e"
      )
      .catch((err) => {
        console.log("Err", err);
      });

    dispatch(getMovies(res.data.results));
    console.log(res.data.results);
  };

  useEffect(() => {
    fetchmovies();
  }, []);

  const getImage = (path) => `https://image.tmdb.org/t/p/w500/${path}`;

  return (
    <div className="card_main">
      {/* {movies.slice(0,4).map((m) => ( */}
      {movies
        .filter((film) => film.original_language !== "hi")
        .map((m) => (
          <div className="card" key={m.id}>
            <div className="photos">
              <img src={getImage(m.poster_path)} alt="" />
            </div>
            <div className="card_infos">
              <div className="title">{m.original_title}</div>
              <div className="category">
                <div className="time-date">
                  <span className="date"> {m.release_date}</span>
                </div>

                {/* <div className="time-date">
                  {m.adult === false ? <p> family show</p> : <p> adult </p>}
                </div> */}

                <div className="cat__type">Watch now</div>
              </div>
              
             {/* <div>
                {m.genre_ids.map((kiran) => (
                  
                  <div> {kiran} </div>
                ))}
              </div> */}
              
              <button className="Button__favourite"> Add To Favourite </button>
              <div className="desc">{m.overview}</div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Card;
