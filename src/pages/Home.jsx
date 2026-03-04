import { useState, useEffect } from "react";
import "./Home.css";

function Home() {
   const base = import.meta.env.BASE_URL;
  
   const images = [
  `${base}images/bananas.jpg`,
  `${base}images/cherries.jpg`,
  `${base}images/kiwis.jpg`,
];
  
   const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="home">

      {/* Header */}
      <header className="header">
        <h1 className="title">The Smoothie Place</h1>
      </header>

      {/* Hero Banner */}
     <section
  className="hero"
  style={{ backgroundImage: `url(${images[current]})` }}
>
  <div className="hero-overlay">
    <button className="cta-button">Make Your Own Smoothie!</button>
  </div>
</section>

      {/* Intro Section */}
      <section className="intro">
        <h2>Welcome to The Smoothie Place</h2>

      <div className="section-divider"></div>

        <p>
          Discover delicious smoothie combinations, explore fresh ingredients,
          and create your own custom blends. Whether you're looking for
          something fruity, protein-packed, or refreshing, we've got something
          for you.
        </p>
      </section>

    </div>
  );
}

export default Home;