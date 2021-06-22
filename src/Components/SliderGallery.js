import React from 'react';
import { Container } from 'react-bootstrap';
import Img1 from '../ExtraComponents/Images/img27.jpg';
import Img2 from '../ExtraComponents/Images/img28.jpg';
import Img3 from '../ExtraComponents/Images/img29.jpg';
import Img4 from '../ExtraComponents/Images/img30.jpg';


function SliderGallery(){
    return(
        <Container>
            <div className="row justify-content-center ">
                <div className="col-md-12">
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
                
                <div class="carousel-item active text-dark"> 
                    <img src={Img1} class="img-fluid d-block max-width: 100% w-100" />
                        <div class="carousel-caption d-none d-md-block">
                            <h2>Fitness Center</h2>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                </div>
                <div class="carousel-item text-dark">
                    <img src={Img2} class="img-fluid d-block max-width: 100% w-100" />
                    <div class="carousel-caption d-none d-md-block">
                        <h2>Fitness Center</h2>
                        <p>Some representative placeholder content for the first slide.</p>
                     </div>
                </div>
                <div class="carousel-item">
                    <img src={Img3} class="img-fluid d-block max-width: 100% w-100" />
                        <div class="carousel-caption d-none d-md-block">
                            <h2>Fitness Center</h2>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                </div>
                <div class="carousel-item">
                    <img src={Img4} class="img-fluid d-block max-width: 100% w-100" />
                    <div class="carousel-caption d-none d-md-block">
                        <h2>Fitness Center</h2>
                        <p>Some representative placeholder content for the first slide.</p>
                     </div>
                </div>
            </div>
            

        </div>
                </div>
            </div>
        </Container>
    );

}
export default SliderGallery;