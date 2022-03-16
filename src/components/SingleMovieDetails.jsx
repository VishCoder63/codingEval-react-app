import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getClickedMovieData } from "../Redux/actions";
import { useEffect } from "react";
import styles from "./css/clickedMovie.module.css";

export const SingleMovieDetails = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const params = useParams();

  useEffect(() => {
    // make a request to get the details
    dispatch(getClickedMovieData(params.id));
  }, []);

  return (
    <>
      {console.log("clicked", state)}
      <h1></h1>;
      <div className={styles.clickedMovie}>
        <div>
          <img
            src={state.selectedData.image_url}
            alt=""
            height="100%"
            width="100%"
          />
        </div>
        <div>
          <h1>{state.selectedData.movie_name}</h1>
          {state?.selectedData?.genre &&
            state.selectedData.genre
              .trim()
              .split("|")
              .map((el, index) => (
                <p key={index} className={styles.tags}>
                  {el}
                </p>
              ))}
          <p>
            <b>Rating:</b> {state.selectedData.rating}
          </p>
          <p>
            <b>Release:</b> {state.selectedData.release_date}
          </p>
        </div>
      </div>
    </>
  );
};
