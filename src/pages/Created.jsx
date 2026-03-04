import { useLocation, Link, Navigate } from "react-router-dom";

function Created() {
  const { state } = useLocation();

  // If someone visits /created directly, send them back to Builder
  if (!state) return <Navigate to="/builder" replace />;

  const { base, fruits, boosters, size, totalCalories } = state;

  return (
    <div style={{ maxWidth: 900, margin: "40px auto", padding: "0 20px" }}>
      <h2 style={{ color: "#2e7d32" }}>Your Smoothie is Ready ✅</h2>

      <div style={{
        border: "1px solid rgba(46,125,50,0.35)",
        borderRadius: 18,
        padding: 18,
        background: "white",
        marginTop: 16
      }}>
        <p><b>Base:</b> {base}</p>
        <p><b>Fruits:</b> {fruits.length ? fruits.join(", ") : "None"}</p>
        <p><b>Boosters:</b> {boosters.length ? boosters.join(", ") : "None"}</p>
        <p><b>Size:</b> {size}</p>

        <div style={{
          marginTop: 14,
          padding: 14,
          borderRadius: 16,
          background: "rgba(46,125,50,0.08)"
        }}>
          <div style={{ fontSize: 14, color: "#444" }}>Estimated Calories</div>
          <div style={{ fontSize: 34, fontWeight: 900, color: "#2e7d32" }}>
            {totalCalories}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", gap: 12, marginTop: 18 }}>
        <Link to="/builder" style={{ color: "#c2185b", fontWeight: 700, textDecoration: "none" }}>
          ← Make another
        </Link>
        <Link to="/menu" style={{ color: "#2e7d32", fontWeight: 700, textDecoration: "none" }}>
          Browse menu →
        </Link>
      </div>
    </div>
  );
}

export default Created;