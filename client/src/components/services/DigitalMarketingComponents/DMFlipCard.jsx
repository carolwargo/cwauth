import React, { useState } from "react";
import GirlCamera from "../../../assets/images/GirlCamera.png";
import { Link } from "react-router-dom";

const DMFlipCard = () => {
    const [flippedCards, setFlippedCards] = useState([
        false,
        false,
        false,
        false,
      ]);
    
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
                    .flip-card-services {
                        padding: 50px 20px;
                        background-color: #f7f7f7 !important; /* Add !important to override other styles */
                        text-align: center;
                    }  
                    
                    .col {
                        font-family: Arial, Helvetica, sans-serif;
                        padding: 0; /* Remove padding */
                        margin: 5px; /* Small margin to separate the cards slightly */
                    }
    
                    .flip-card {
                        background-color: transparent;
                        width: 250px;
                        height: 250px;
                        perspective: 1000px;
                        margin: 0 auto;
                    }
    
                    .flip-card-inner {
                        position: relative;
                        width: 100%;
                        height: 100%;
                        text-align: center;
                        transition: transform 0.6s;
                        transform-style: preserve-3d;
                        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                    }
    
                    .flip-card-front, .flip-card-back {
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        -webkit-backface-visibility: hidden;
                        backface-visibility: hidden;
                    }
    
                    .flip-card-front {
                        color: black;
                    }
    
                    .flip-card-back {
                        background-color: #2980b9;
                        color: white;
                        transform: rotateY(180deg);
                    }
                    
                    .flip-card-inner:hover {
                        cursor: pointer;
                    }
                `}
          </style>
              <div className="row">
                {flippedCards.map((isFlipped, index) => (
                  <div
                    className="col-sm-12 col-md-3 col-lg-3 justify-content-center align-items-center"
                    key={index}
                  >
                    <div className="flip-card" onClick={() => handleFlip(index)}>
                      <div
                        className="flip-card-inner shadow rounded"
                        style={{
                          transform: isFlipped
                            ? "rotateY(180deg)"
                            : "rotateY(0deg)",
                        }}
                      >
                        <div
                          className="flip-card-front"
                          style={{
                            backgroundColor: "aqua",
                            opacity: "0.8",
                            transition:
                              "backgroundColor 0.3s ease, opacity 0.3s ease",
                          }}
                        >
                          <img
                            src={GirlCamera}
                            alt="girl"
                            className="w-100 shadow rounded"
                          />
                        </div>
                        <div className="flip-card-back d-flex justify-content-center align-items-center w3-pink shadow rounded">
                          <div>
                            <h1>John Doe</h1>
                            <p>Architect & Engineer</p>
                            <p>We love that guy</p>
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
