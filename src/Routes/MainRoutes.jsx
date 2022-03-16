import { Routes, Route } from "react-router";
import App from "../App";
import { About } from "../components/About";
import { Home } from "../components/Home";
import { MoviesDashboard } from "../components/MoviesDashboard";
import { SingleMovieDetails } from "../components/SingleMovieDetails";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="movies" element={<MoviesDashboard />} />
        <Route path="movies/:id" element={<SingleMovieDetails />} />
      </Route>
    </Routes>
  );
};
