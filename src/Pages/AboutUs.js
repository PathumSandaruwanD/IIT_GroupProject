import React from 'react'; 
import OurStaffCards from '../Components/OurStaffCards';
import Img1 from '../ExtraComponents/Images/img31.jpg';



function AboutUs(){

    return (
      
            
        <div className="container-fluid  bg-dark">
            
            <div className="row">
                <div className="col-12">
                    <img src={Img1} className="img-fluid"></img>
                </div>
            </div>
            <div className="row justify-content-center text-center pt-4">
                <div className="col-md-6">
                    <h1 className="display-4 text-warning"><b>Meet Our Team</b></h1>
                </div>
            </div>
            <div className="row">
                <OurStaffCards />
            </div>
            <div className="row justify-content-center bg-warning text-center">
                <div className="ourstaffPage">
                <blockquote class="blockquote mb-0">
                    <p>A well-known quote, contained in a blockquote element.</p>
                    <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                </blockquote>
                </div>
            </div>
        </div>
    
      );

}
export default AboutUs;