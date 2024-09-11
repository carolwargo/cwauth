import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import GirlCamera from '../../../assets/images/GirlCamera.png';

const DMFlipCardHover = ({ title, description, image }) => {
    const [flippedCards, setFlippedCards] = useState([false, false, false, false]);

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
                body {
                    font-family: Arial, Helvetica, sans-serif;
                }
                
                .flip-card {
                    background-color: transparent;
                    width: 100%;
                    max-width: 300px;
                    height: auto;
                    perspective: 1000px;
                    margin: 0 auto;
                }
                
                .flip-card-inner {
                    position: relative;
                    width: 100%;
                    padding-top: 100%; /* This creates a square container */
                    text-align: center;
                    transition: transform 0.6s;
                    transform-style: preserve-3d;
                    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
                }
                
                .flip-card:hover .flip-card-inner {
                    transform: rotateY(180deg);
                }
                
                .flip-card-front, .flip-card-back {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    -webkit-backface-visibility: hidden;
                    backface-visibility: hidden;
                }
                
                .flip-card-front {
                    background-color: #bbb;
                    color: black;
                }
                
                .flip-card-back {
                    background-color: #2980b9;
                    color: white;
                    transform: rotateY(180deg);
                }

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                @media (max-width: 768px) {
                    .flip-card {
                        max-width: 200px;
                    }
                }

                @media (max-width: 480px) {
                    .flip-card {
                        max-width: 150px;
                    }
                }
                `}
            </style>
            
            <div className='w3-padding-32'>
            <div className="container text-center py-2 mb-2">
          
            <h1>Card Flip with Text</h1>
            <h3>Tap on the image below:</h3>
            </div>
            <div className="w3-container">
            <div className="row g-3">
                {flippedCards.map((isFlipped, index) => (
                    <div className="col-sm-12 col-md-3 col-lg-3 justify-content-center align-items-center" key={index}>
                        <div className="flip-card" onClick={() => handleFlip(index)}>
                            <div 
                                className="flip-card-inner shadow rounded" 
                                style={{ 
                                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' 
                                
                                }}
                            >
                                <div className="flip-card-front"
                                   style={{
                                    backgroundColor:'aqua',
                                    opacity: '0.8',
                                    transition: "backgroundColor 0.3s ease, opacity 0.3s ease"
                               }}>
                                    <img src={GirlCamera} alt="girl" className='w-100 shadow rounded' />
                                </div>
                                <div className="flip-card-back d-flex justify-content-center align-items-center w3-pink shadow rounded">
                                   <div>
                                    <h1>John Doe</h1> 
                                    <p>Architect & Engineer</p> 
                                    <p>We love that guy</p>
                                    <Link to='/'>
                                    <button className='btn btn-dark'>See More</button>
                                    </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
            </div>
        </div>
    );
};

export default DMFlipCardHover;
