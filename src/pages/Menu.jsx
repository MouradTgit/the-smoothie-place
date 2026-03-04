import smoothies from "../data/smoothies";
import SmoothieCard from "../components/SmoothieCard";
import { useMemo, useState, useEffect } from "react";
import "./Menu.css";

const FILTERS = [
  { label: "All", icon: "🥤" },
  { label: "Protein/Workout", icon: "💪" },
  { label: "Dessert/Comfort", icon: "🍓" },
  { label: "Detox/Greens", icon: "🥬" }
];

function Menu() {
  const base = import.meta.env.BASE_URL; 

  const [filter, setFilter] = useState("All");
  const [fade, setFade] = useState(false);

  const filteredSmoothies = useMemo(() => {
    if (filter === "All") return smoothies;
    return smoothies.filter((s) => s.purpose === filter);
  }, [filter]);

  // Fade 
  useEffect(() => {
    setFade(true);
    const t = setTimeout(() => setFade(false), 180);
    return () => clearTimeout(t);
  }, [filter]);


  return (
    <div className="menu-page">
      <h2 className="menu-title">Menu</h2>

      <div className="menu-layout">
        {/* Sidebar */}
        <aside className="menu-sidebar">
          <div className="sidebar-title">Filter</div>

          {FILTERS.map((item) => (
            <button
              key={item.label}
              className={`filter-btn ${filter === item.label ? "active" : ""}`}
              onClick={() => setFilter(item.label)}
            >
              {item.icon} {item.label}
            </button>
           ))}
        </aside>

        {/* Grid */}
        <section className={`menu-grid-wrap ${fade ? "fade" : ""}`}>
          <div className="menu-grid">
            {filteredSmoothies.map((s) => (
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
        </section>
      </div>
    </div>
  );
}

export default Menu;