import { useParams, Link } from "react-router-dom";
import smoothies from "../data/smoothies";

function Details() {
  const { id } = useParams();
  const smoothie = smoothies.find((s) => s.id === id);
  const base = import.meta.env.BASE_URL;

  if (!smoothie) {
    return (
      <div style={{ maxWidth: 900, margin: "40px auto", padding: "0 20px" }}>
        <h2 style={{ color: "#2e7d32" }}>Smoothie not found</h2>
        <Link to="/menu" style={{ color: "#c2185b" }}>Back to Menu</Link>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 900, margin: "40px auto", padding: "0 20px" }}>
      <Link to="/menu" style={{ color: "#c2185b", textDecoration: "none" }}>
        ← Back to Menu
      </Link>

      <h2 style={{ color: "#2e7d32", marginTop: 14 }}>{smoothie.name}</h2>
      <p style={{ color: "#444" }}>{smoothie.desc}</p>

      <div
        style={{
          height: 260,
          borderRadius: 18,
          border: "1px solid rgba(46,125,50,0.25)",
          backgroundImage: `url(${base}${smoothie.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          margin: "18px 0"
        }}
      />

      <h3 style={{ color: "#2e7d32" }}>Ingredients</h3>
      <ul>
        {smoothie.ingredients.map((ing) => (
          <li key={ing}>{ing}</li>
        ))}
      </ul>

      <h3 style={{ color: "#2e7d32" }}>Calories</h3>
      <p style={{ fontWeight: 700 }}>{smoothie.calories} cal</p>
    </div>
  );
}

export default Details;