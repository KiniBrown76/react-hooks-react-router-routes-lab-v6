import { Link } from "react-router-dom";

const MovieCard = ({ id, title }) => (
  <div>
    <h2>{title}</h2>
    <Link to={`/movie/${id}`}>View Info</Link>
  </div>
);

export default MovieCard;