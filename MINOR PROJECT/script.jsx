import React, { useState, useEffect } from 'react';
import './style.css'; // Ensure your styles are imported

const HomePage = () => {
  const [formVisible, setFormVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState('CONFIDENCE');

  const words = ["CONFIDENCE", "ENDURANCE", "FOCUS", "POWER", "VITALITY", "RESILIENCE"];
  let wordIndex = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(words[wordIndex]);
      wordIndex = (wordIndex + 1) % words.length;
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, [wordIndex]);

  const toggleSignupForm = () => {
    setFormVisible(!formVisible);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value.trim();
    const email = event.target.email.value.trim();
    const password = event.target.password.value.trim();
    const confirmPassword = event.target.confirm_password.value.trim();

    const formMessage = document.getElementById('formMessage');

    if (password !== confirmPassword) {
      formMessage.textContent = "Passwords do not match!";
      formMessage.style.color = "red";
      return;
    }

    formMessage.textContent = "Sign-up successful!";
    formMessage.style.color = "green";

    event.target.reset();
  };

  return (
    <div>
      <header>
        <nav>
          <div className="logo"><h1>Nutrifit</h1></div>
          <div className="menu">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#programs">Programs</a>
            <a href="#contact">Contact</a>
            <a href="#community">Community</a>
          </div>
        </nav>

        <main>
          <section>
            <h3>Build Strength</h3>
            <h1>Boost <span className="change_content">{currentWord}</span></h1>
            <p>"Start Your Fitness Journey Today"</p>
            <a href="#programs" className="btnone">Learn More</a>
            <a href="#" className="btntwo" onClick={toggleSignupForm}>Sign Up</a>   
          </section>

          {formVisible && (
            <section className="signup-form">
              <h1>Sign Up</h1>
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />

                <label htmlFor="confirm_password">Confirm Password:</label>
                <input type="password" id="confirm_password" name="confirm_password" required />

                <button type="submit" className="btnone">Sign Up</button>
              </form>
              <div id="formMessage"></div>
            </section>
          )}
        </main>
      </header>
    </div>
  );
};

export default HomePage;
               