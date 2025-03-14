import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import ioMediaLogo from "./assets/ioMediaLogo.png";
import ioMediaLogoWhite from "./assets/ioMediaLogo_white.png"; // Import the white logo

import "./App.css";
import Header from "./components/Header";
import ExpandableCard from "./components/ExpandableCard";

function App() {
  const [theme, setTheme] = useState(() => {
    // Get saved theme from localStorage or use system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme;

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Card data defined directly in App.jsx
  const cards = [
    {
      id: "YouTubePremium",
      subtitle: <>Youtube Premium <span className="price-pill youtube">£2/month</span></>,
      content: "• Ad-free viewing: Watch videos without interruptions\n • Background play: Listen to videos while using other apps\n• Downloads: Save videos for offline viewing\n• YouTube Music Premium: Enjoy ad-free music streaming\n• YouTube Originals: Access exclusive content.",
      actionButton: {
        text: "Subscribe Now",
        icon: "fa-brands fa-whatsapp",
        href: "https://wa.me/22956982342?text=Hi!%20I%20want%20to%20subscribe%20to%20Youtube%20Premium,%20my%20name%20is:%20"
      },
      imageUrl: "https://static1.xdaimages.com/wordpress/wp-content/uploads/2018/03/youtube-dark.png",
      imageAlt: "YouTube Logo",
      imageClass: "profile-circle",
      expandedBgColor: "#da0000" // Add YouTube red color
    },
    {
      id: "PrimeVideo",
      subtitle: <>Prime Video <span className="price-pill prime">£3/month</span></>,
      content: "• Streaming library: Thousands of movies and TV shows\n• Amazon Originals: Exclusive series and films\n• Download & watch offline: Save content to watch anywhere\n• Single Profile access: Personalized viewing experience",
      actionButton: {
        text: "Subscribe Now",
        icon: "fa-brands fa-whatsapp",
        href: "https://wa.me/22956982342?text=Hi!%20I%20want%20to%20subscribe%20to%20Prime%20video,%20my%20name%20is:%20"
      },
      imageUrl: "https://m.media-amazon.com/images/I/31W9hs7w0JL.png",
      imageAlt: "Amazon Logo",
      imageClass: "profile-circle",
      expandedBgColor: "#0779FF" // Add Prime Video blue color
    },
    {
      id: "Netflix",
      subtitle: <>Netflix <span className="price-pill netflix">£3/month</span></>,
      content: "• Vast content library: Movies, TV shows, documentaries, and more\n• Netflix Originals: Award-winning exclusive content\n• Single profile access: Personalized viewing experience.\n• Download & watch offline: Save content for later",
      actionButton: {
        text: "Subscribe Now",
        icon: "fa-brands fa-whatsapp",
        href: "https://wa.me/22956982342?text=Hi!%20I%20want%20to%20subscribe%20to%20Netflix,%20my%20name%20is:%20"
      },
      imageUrl: "https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940",
      imageAlt: "Netflix Logo",
      imageClass: "profile-circle",
      expandedBgColor: "#000000" // Add Netflix red color
    }
  ];

  return (
    <>

      <Header theme={theme} toggleTheme={toggleTheme} />

      <div>
        {/* Use different logo based on theme */}
        <img
          src={theme === "light" ? ioMediaLogoWhite : ioMediaLogo}
          className="logo io-media"
          alt="IO Media logo"
        />
      </div>
      <p className="read-the-docs">
        Pay less for the same entertainment.
      </p>

      {/* Multiple expandable cards directly in App.jsx */}
      <div className="cards-grid">
        {cards.map(card => (
          <ExpandableCard
            key={card.id}
            title={card.title}
            subtitle={card.subtitle}
            content={card.content}
            actionButton={card.actionButton ? (
              <a href={card.actionButton.href} target="_blank" rel="noopener noreferrer">
                <button className="contact-button">
                  {card.actionButton.icon && <i className={card.actionButton.icon}></i>}
                  <span>{card.actionButton.text}</span>
                </button>
              </a>
            ) : null}
            imageUrl={card.imageUrl}
            imageAlt={card.imageAlt}
            imageClass={card.imageClass}
            expandedBgColor={card.expandedBgColor} // Add this line
          />
        ))}
      </div>

      <footer>
        <p>
          © {new Date().getFullYear()}{" "}
          <a href="#">ORYANOL</a>
        </p>
      </footer>
    </>
  );
}

export default App;