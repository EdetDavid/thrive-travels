import React, { useState, useEffect } from "react";
import "./CallToAction.css";

const CallToAction = () => {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${secs}`;
  };

  return (
    <section className="call-to-action">
      <h2>Ready to Start Your Journey?</h2>
      <p>Book your next adventure with us and experience the world like never before.</p>
      <div className="cta-buttons ">
        {/* Link the "Book Now" button to the booking page */}
        <a href="/book-flight" className="cta-button primary text-decoration-none">
          Book Now
        </a>
        {/* Link the "Learn More" button to the about page */}
        <a href="/about-us" className="cta-button secondary text-decoration-none">
          Learn More
        </a>
      </div>
      <div className="countdown">
        <p>Limited-time offer! Book within:</p>
        <span id="timer">{formatTime(timeLeft)}</span>
      </div>
      {/* <div className="testimonial">
        <p>"Thrive Travels made my dream vacation come true! Highly recommend their services."</p>
        <span>- Jane Doe</span>
      </div> */}
    </section>
  );
};

export default CallToAction;