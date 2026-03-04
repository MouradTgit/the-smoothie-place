import { Link } from "react-router-dom";
import "./SmoothieCard.css";

function SmoothieCard({ id, name, desc, calories, tags, imageUrl }) {
  return (
    <Link to={`/menu/${id}`} className="card">
      <div className="card-img" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="card-body">
        <h3>{name}</h3>
        <p className="desc">{desc}</p>
        <div className="meta">
          <span>{calories} cal</span>
          <span className="tags">{tags.join(" • ")}</span>
        </div>
      </div>
    </Link>
  );
}

export default SmoothieCard;