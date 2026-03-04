import { useMemo, useState } from "react";
import { BASES, FRUITS, BOOSTERS } from "../data/ingredients";
import "./Builder.css";
import { useNavigate } from "react-router-dom";

function Builder() {

const navigate = useNavigate();

  const [base, setBase] = useState(BASES[0].name);
  const [fruits, setFruits] = useState([]);      // array of names
  const [boosters, setBoosters] = useState([]);  // array of names
  const [size, setSize] = useState("Medium");    // Small/Medium/Large

  const sizeMultiplier = useMemo(() => {
    if (size === "Small") return 0.85;
    if (size === "Large") return 1.25;
    return 1;
  }, [size]);

  const totalCalories = useMemo(() => {
    const baseItem = BASES.find((b) => b.name === base);
    const fruitCals = fruits
      .map((n) => FRUITS.find((f) => f.name === n)?.calories || 0)
      .reduce((a, b) => a + b, 0);

    const boosterCals = boosters
      .map((n) => BOOSTERS.find((b) => b.name === n)?.calories || 0)
      .reduce((a, b) => a + b, 0);

    const raw = (baseItem?.calories || 0) + fruitCals + boosterCals;
    return Math.round(raw * sizeMultiplier);
  }, [base, fruits, boosters, sizeMultiplier]);

  const toggle = (list, setList, value) => {
    setList((prev) => (prev.includes(value) ? prev.filter((x) => x !== value) : [...prev, value]));
  };

  const reset = () => {
    setBase(BASES[0].name);
    setFruits([]);
    setBoosters([]);
    setSize("Medium");
  };

  return (
    <div className="builder" style={{ maxWidth: 1100, margin: "40px auto", padding: "0 20px" }}>      <h2 style={{ color: "#2e7d32", marginBottom: 10 }}>Build Your Own</h2>
      <p style={{ color: "#444", marginTop: 0 }}>
        Pick a base, fruits, and boosters. Calories update live.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 18 }}>
        {/* LEFT: PICKERS */}
        <div style={{ border: "1px solid rgba(46,125,50,0.25)", borderRadius: 18, padding: 16 }}>
          <h3 style={{ color: "#2e7d32" }}>Base</h3>
          {BASES.map((b) => (
            <label key={b.name} style={{ display: "block", marginBottom: 8 }}>
              <input
                type="radio"
                name="base"
                checked={base === b.name}
                onChange={() => setBase(b.name)}
              />{" "}
              {b.name} ({b.calories} cal)
            </label>
          ))}

          <h3 style={{ color: "#2e7d32", marginTop: 18 }}>Fruits</h3>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
            {FRUITS.map((f) => (
              <label key={f.name} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <input
                  type="checkbox"
                  checked={fruits.includes(f.name)}
                  onChange={() => toggle(fruits, setFruits, f.name)}
                />
                <span>{f.name} ({f.calories})</span>
              </label>
            ))}
          </div>

          <h3 style={{ color: "#2e7d32", marginTop: 18 }}>Boosters</h3>
          {BOOSTERS.map((b) => (
            <label key={b.name} style={{ display: "block", marginBottom: 8 }}>
              <input
                type="checkbox"
                checked={boosters.includes(b.name)}
                onChange={() => toggle(boosters, setBoosters, b.name)}
              />{" "}
              {b.name} ({b.calories} cal)
            </label>
          ))}

          <h3 style={{ color: "#2e7d32", marginTop: 18 }}>Size</h3>
          {["Small", "Medium", "Large"].map((s) => (
            <label key={s} style={{ marginRight: 14 }}>
              <input
                type="radio"
                name="size"
                checked={size === s}
                onChange={() => setSize(s)}
              />{" "}
              {s}
            </label>
          ))}

          <div style={{ marginTop: 18, display: "flex", gap: 10 }}>
            <button
              onClick={reset}
              style={{
                padding: "10px 14px",
                borderRadius: 12,
                border: "1px solid rgba(46,125,50,0.35)",
                background: "white",
                color: "#2e7d32",
                cursor: "pointer",
                fontWeight: 700
              }}
            >
              Reset
            </button>
          </div>
        </div>

        {/* RIGHT: SUMMARY */}
        <div style={{ border: "1px solid rgba(46,125,50,0.25)", borderRadius: 18, padding: 16 }}>
          <h3 style={{ color: "#2e7d32", marginTop: 0 }}>Your Smoothie</h3>

          <p><b>Base:</b> {base}</p>
          <p><b>Fruits:</b> {fruits.length ? fruits.join(", ") : "None yet"}</p>
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

          <button
            style={{
              marginTop: 14,
              width: "100%",
              padding: "14px 16px",
              borderRadius: 16,
              border: "none",
              background: "#2e7d32",
              color: "white",
              cursor: "pointer",
              fontWeight: 800
            }}
            onClick={() => {
              navigate("/created", {
                state: { base, fruits, boosters, size, totalCalories }
              });
            }}          >
            Create Smoothie
          </button>

          <p style={{ marginTop: 12, color: "#c2185b", fontWeight: 700 }}>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Builder;