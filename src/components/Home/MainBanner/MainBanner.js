import React from 'react';
import './MainBanner.css';
import { Carousel } from 'react-bootstrap';

const MainBanner = () => {
    return (
        <div>
            <Carousel>
                {/* ---- First slide ---- */}
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-size"
                        src="https://i.ibb.co/ZBFvY4S/banner1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className="banner-title">
                        <h1>Welcome to Hotel Grace 21</h1>
                        <p>A smart boutique hotel near airport</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* ---- Second slide ---- */}
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-size"
                        src="https://i.ibb.co/rFd3nBY/banner2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>Welcome to Hotel Grace 21</h1>
                        <p>A smart boutique hotel near airport</p>
                    </Carousel.Caption>
                </Carousel.Item>
                {/* ---- Third slide ---- */}
                <Carousel.Item>
                    <img
                        className="d-block w-100 banner-size"
                        src="https://i.ibb.co/H276W9R/banner3.jpg.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>Welcome to Hotel Grace 21</h1>
                        <p>A smart boutique hotel near airport</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default MainBanner;