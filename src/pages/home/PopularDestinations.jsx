import React from "react";
import "./PopularDestinations.css";

const destinations = [
  {
    name: "Paris",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    description: "The city of lights and love, known for its iconic Eiffel Tower.",
  },
  {
    name: "Bali",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSHKACJb-mtGbqZIx6gUxmfuWDGnZgzPPtuw&s",
    description: "A tropical paradise with stunning beaches and lush greenery.",
  },
  {
    name: "New York",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAti0sKNO6BKvubgMZ7_nngLKg8OItWLEq-Q&s",
    description: "The city that never sleeps, featuring the iconic Manhattan skyline.",
  },
  {
    name: "Maldives",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHLeo440OtA1WXPmFDPhuD8Rdx5BZyC8BKqg&s",
    description: "A tropical haven with crystal-clear waters and luxurious overwater villas.",
  },
  {
    name: "Sydney",
    image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
    description: "Home to the iconic Opera House and beautiful harbor views.",
  },
  {
    name: "Rome",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8zlN2MynhkvSeX452Oxe-heMUuK_3iJMPcQ&s",
    description: "The Eternal City, known for its ancient ruins and stunning architecture.",
  },
  {
    name: "Cape Town",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzbqzD7w3C9vs-Q6xSJipiJ5893R07xROQhQ&s",
    description: "A vibrant city with breathtaking views of Table Mountain.",
  },
  {
    name: "Dubai",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN4cwc9yZ5qvIw5PtFCQ8ca3hZ2GQuRiVu3w&s",
    description: "A modern city known for luxury shopping, ultramodern architecture, and nightlife.",
  },
  {
    name: "Rio de Janeiro",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2_GUAT4WRHBk198DOOer_ah0nTPpIQAK_g&s",
    description: "Famous for its Copacabana beach and the Christ the Redeemer statue.",
  },
  {
    name: "Santorini",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPK-O1ty0zVzmuJLHCLBNHWZaM7rJzNVOLxw&s",
    description: "A picturesque island with whitewashed buildings and stunning sunsets.",
  },
];

const PopularDestinations = () => {
  return (
    <section className="popular-destinations">
      <h2>Popular Destinations</h2>
      <div className="scrolling-container">
        <div className="scrolling-content">
          {destinations.map((destination, index) => (
            <div key={index} className="destination-card">
              <img src={destination.image} alt={destination.name} />
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>
            </div>
          ))}
          {/* Duplicate the destinations for seamless scrolling */}
          {destinations.map((destination, index) => (
            <div key={`duplicate-${index}`} className="destination-card">
              <img src={destination.image} alt={destination.name} />
              <h3>{destination.name}</h3>
              <p>{destination.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;