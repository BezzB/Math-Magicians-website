import React from 'react';
import './Home.css';

function Home() {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <div className="home-container">
      <h3 className="home-head">Welcome Home!</h3>
      <p className="home-desc">
        Mathematics is the language of science. It is a universal tool that allows us to
        communicate ideas and solve problems.
        Mathematics is essential for understanding the world around us, and it is a powerful
        tool for innovation and creativity.
      </p>
      <p className="home-desc">
        Mathematics has been a part of human history for thousands of years.
        Early civilizations used mathematics to track time, measure land,
        and build structures. As mathematics developed, it became increasingly
        important in science, engineering, and technology.
        Today, mathematics is used in almost every aspect of our lives,
        from cooking to driving to using the internet.
      </p>

    </div>
  );
}

export default Home;
