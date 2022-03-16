import React, { useEffect } from "react";
import { filterByGenre, getMovieData } from "../Redux/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./css/dashboard.module.css";
import { useNavigate } from "react-router-dom";

const genres = ["", "Comedy", "Thriller", "Drama", "Documentary", "Children"];

export const MoviesDashboard = () => {
  // to get all movies list on component mounts
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  useEffect(() => {
    //  dispatch an action to the store
    dispatch(getMovieData());
  }, [dispatch]);
  // }, [dispatch]);

  //    filter by genre
  const handleFilter = (e) => {
    // dispach filterby genre action to the store

    dispatch(filterByGenre(e.target.value));
  };

  const handleCardClick = (id) => {
    navigate(`/movies/${id}`);
  };
  return (
    <>
      {/* {console.log("filtereddata: ", state.filterData)} */}
      <h2>Movies</h2>
      <select onChange={handleFilter}>
        {
          /* map through the filter  */
          genres.map((el, index) => {
            return <option key={index}>{el}</option>;
          })
        }
      </select>
      <div id={styles["movie-box"]} className="movies-list">
        {
          /* map throught th movie list and display the results */
          state.filterData.map((el) => (
            <div className={styles["movie-card"]} onClick={()=>handleCardClick(el.id)}>
              <img src={el.image_url} alt="" />
              <h4>{el.movie_name}</h4>
              {/* <p>{el.id}</p> */}
            </div>
          ))
        }
      </div>
    </>
  );
};
