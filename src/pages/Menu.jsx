import smoothies from "../data/smoothies";
import SmoothieCard from "../components/SmoothieCard";

function Menu() {
  const base = import.meta.env.BASE_URL; 

  return (
    <div style={{ maxWidth: 1100, margin: "40px auto", padding: "0 20px" }}>
      <h2 style={{ color: "#2e7d32", marginBottom: 16 }}>Menu</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
        gap: 18
      }}>
        {smoothies.map((s) => (
          <SmoothieCard
            key={s.id}
            id={s.id}
            name={s.name}
            desc={s.desc}
            calories={s.calories}
            tags={s.tags}
            imageUrl={`${base}${s.image}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;