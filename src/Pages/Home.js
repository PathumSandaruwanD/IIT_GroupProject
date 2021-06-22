import React from 'react'; 
import Slider from '../Components/Slider';
import Img1 from '../ExtraComponents/Images/img12.png';
import Img2 from '../ExtraComponents/Images/img4.jpg';
import CardHome from '../Components/CardHome';

import {Link} from "react-router-dom";



function Home(){
    return (
        
        <div class="container-fluid bg-dark" >
            <Slider  />
            <div class="row text-center my-5">
                <div class="col-md-6">
                    <p class="h3 text-warning px-5">From the moment you walk through the door you know Gymbase is a unique place</p>
                    <p class="text-warning px-4">When we created Gym Base, we knew we wanted to be more than just a simple gym. Having worked in traditional gyms in the past, we knew we needed to create a concept that would provide our members with the most effective tools for success. This meant we needed to offer a wide range of classes both for children and adults.</p>
                    <p class="text-warning px-4">This also meant we needed to provide a learning environment run by experienced and successful coaches. However, our most important goal was to create a welcoming atmosphere and community in which everyone feels a sense of belonging.</p>
                    
                </div>
                <div class="col-md-6">
                <img src={Img1} class="img-fluid float-start"></img>
                </div>
                
            </div>

                
            <div className="homeCardsDetails">
            <h1 className="display-5 text-warning"><b>Traning Programms</b></h1>
                    <blockquote class="blockquote">
                         <p className="text-warning">A well-known quote, contained in a blockquote element.</p>
                            <figcaption class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                    </blockquote>
                <CardHome />
            </div>
            <div className="row mt-5 bg-warning text-dark text-start justify-content-center">
                   
                <div className="col-md-6">
                   <img className="img-fluid py-5" src={Img2}></img>
                </div>
                <div className="col-md-6 px-4 py-5">
                   <h3>MOTIVATE</h3>
                   <p ><em>Specializing in body recomposition, competition prep for fitness and physique professionals, and providing sport-specific nutritional advice.</em></p>
                   <br/>
                   <h3>INSPIRE</h3>
                   <p ><em>Whether the priority be hypertrophy gains, fat loss or simply an improvement in physical fitness, each programme is devised on an individual basis.</em></p>
                   <br/>
                   <h3>ACHIEVE</h3>
                   <p ><em>Based on this fitness assessment, we consider a client’s strengths, weaknesses and any personal limitations, preferences or medical considerations that may be applicable.</em></p>
                    <button className="btn btn-dark btn-lg"><Link to="/Registation" class="nav-link ">Register Today</Link></button>
                </div>
            </div>
               
            </div>
        
      );
}
export default Home; 