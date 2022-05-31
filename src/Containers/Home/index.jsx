import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const iconStyles = {
    color: 'white',
    width: '40px',
    height: '40px',
  };

  return (
    <div className="home">
      <h2 className="home__title">Welcome to our page!</h2>
      <p className="home__text">
        Math magicians is a website for all fans of mathematics. It is
        a Single Page App (SPA) that allows users to make simple
        calculations and read a random math-related quote.
      </p>

      <p className="home__footer">
        This project was made by Andres Agudelo, as part of the React
        module of Microverse school.
      </p>

      <h2 className="home__social">You can find me here:</h2>
      <ul className="social__list">
        <li>
          <a
            href="https://github.com/anagudelogu/math-magicians"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub style={iconStyles} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/aagst/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin style={iconStyles} />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/AgudeloAndres__"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter style={iconStyles} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
