import React, { useState } from "react";
import GirlCamera from "../../../assets/images/GirlCamera.png";
import { Link } from "react-router-dom";

const DMFlipCard = () => {
  const [flippedCards, setFlippedCards] = useState([false, false, false, false]);

  // Data for each card
  const cardData = [
    {
      frontTitle: "SEO Optimization",
      frontDescription: "Increase your visibility on search engines and drive organic traffic.",
      backTitle: "John Doe",
      backDescription: "Architect & Engineer",
      image: GirlCamera,
    },
    {
      frontTitle: "Content Creation",
      frontDescription: "Engage your audience with high-quality content.",
      backTitle: "Jane Smith",
      backDescription: "Content Creator & Marketer",
         image: GirlCamera,
    },
    {
      frontTitle: "Social Media Marketing",
      frontDescription: "Boost your brand presence on social platforms.",
      backTitle: "Mark Taylor",
      backDescription: "Social Media Expert",
      image: GirlCamera,
    },
    {
      frontTitle: "Email Campaigns",
      frontDescription: "Drive conversions with targeted email marketing.",
      backTitle: "Emma Watson",
      backDescription: "Email Marketing Specialist",
         image: GirlCamera,
    },
  ];

  const handleFlip = (index) => {
    const updatedFlippedCards = flippedCards.map((flipped, i) =>
      i === index ? !flipped : flipped
    );
    setFlippedCards(updatedFlippedCards);
  };


  return (
    <div>
    <style>
        {`
        .flip-card {
  background-color: transparent;
  width: 250px;
  height: 250px;
  perspective: 1000px;
  margin: 0 auto;
  overflow: hidden; /* Ensure that card content stays within bounds */
}


         .flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

          .flip-card-front,
.flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
}
        .flip-card-front {
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
}

.flip-card-front::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
  pointer-events: none;
  border-radius: 10px;
}


.flip-card-back {
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}

          .flip-card-inner:hover {
            cursor: pointer;
          }

       .flip-card-details {
  position: relative;
  z-index: 2; /* Ensure the text appears on top of the mask */
  background-color: transparent; /* No background color for the service-card */
  color: white;
}

          .flip-card-details h3 {
            margin: 0;
            font-size: 1.5em;
          }

          .flip-card-details p {
            margin: 0;
          }
        `}
      </style>
      <div className="text-center w3-padding-48">
       <h1>Our Services</h1> 
      </div>
      <div className="row justify-content-center align-items-center">
      {cardData.map((card, index) => (
        <div
          className="col-sm-12 col-md-3 col-lg-3 justify-content-center align-items-center"
          key={index}
        >
          <div
            className="flip-card"
            onClick={() => handleFlip(index)}
          >
            <div
              className="flip-card-inner shadow rounded"
              style={{
                transform: flippedCards[index]
                  ? "rotateY(180deg)"
                  : "rotateY(0deg)",
              }}
            >
              {/* Front of the card */}
              <div
                className="flip-card-front"
                style={{
                  backgroundImage: `url(${card.image})`,
                }}
              >
                <div className="flip-card-details">
                  <h3>{card.frontTitle}</h3>
                  <p>{card.frontDescription}</p>
                </div>
              </div>

              {/* Back of the card */}
              <div className="flip-card-back d-flex justify-content-center align-items-center shadow rounded">
                <div>
                  <h1>{card.backTitle}</h1>
                  <p>{card.backDescription}</p>
                  <Link to="/">
                    <button className="btn btn-dark">See More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default DMFlipCard;