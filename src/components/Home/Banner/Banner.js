import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div style={{ maxHeight: '100vh' }}>



            <Carousel className="justify-content-center align-items-center">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src=" https://i.ibb.co/3MW5D3H/home-1-slider-bckgr-image-1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Nature Always Wears the Color of The Spirit</h1>
                        <p>just browse through and chose your own voyage of discovery</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/d4dF9p6/home-1-slider-bckgr-image-2.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1>Are You Ready to Set Forth On a New Voyage</h1>
                        <p>just browse through and chose your own voyage of discovery</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/0JXQmzf/home-1-slider-bckgr-image-3.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>Go Where There Is No Path and Leave No Trail</h1>
                        <p>just browse through and chose your own voyage of discovery</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;