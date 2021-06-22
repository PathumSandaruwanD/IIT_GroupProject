import React from 'react'; 
import Img1 from '../ExtraComponents/Images/im8.jpg'
import TransformationCard from '../Components/TransformationCard';
import SliderGallery from '../Components/SliderGallery';
import logo1 from '../ExtraComponents/Images/logo.png';


function Gallery(){

    return (
        <div className="container-fluid bg-dark">
            <div className="row pb-4">
                <div className="col-md-12">
                    <img src={Img1} className="img-fluid"></img>
                </div>
            </div>
            <div className="row bg-warning text-center">
                <div className="col-md-12">
                    <h1 className="display-5 text-dark pt-3"><b>Interior</b></h1>
                    <figure>
                         <blockquote class="blockquote">
                         <p className="text-dark">A well-known quote, contained in a blockquote element.</p>
                            <figcaption class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                         </blockquote>
                    </figure>
                        
                </div>
                <div className="col-12">        
                    <SliderGallery />
                    
                </div>
            
            <div className="row bg-dark">
                <div className="col-12">
                   
                </div>
            </div>
            <div className="row text-center bg-dark">
                <div className="col-12 text-center">
                    <h1 className="display-5 text-warning"><b>Body Transformations</b></h1>
                    <figure>
                         <blockquote class="blockquote">
                         <p className="text-warning">A well-known quote, contained in a blockquote element.</p>
                            <figcaption class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite>
                            </figcaption>
                         </blockquote>
                    </figure>
                </div>
                <div className="col-12">
                    <TransformationCard />
                </div>
            </div>
        </div>
        </div>
      );

}
export default Gallery;