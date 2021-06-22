import React from 'react'; 
import CardSlider from '../Components/CardSlider';
import PackageDetails from '../Components/PackageDetails';
import Img1 from '../ExtraComponents/Images/im7.jpg'

function Services(){

    return (
        <div className="container-fluid bg-dark">
            <div className="row">
                <div className="col-12">
                    <div className="main image">
                        <img src={Img1} className="img-fluid"></img>
                    </div>
                </div>
            </div>
            <div className="row">
               <div className="col-12">
                    <CardSlider />
               </div>
           </div>

           <div className="row justify-content-center">
               <div className="col-md-12">
               <PackageDetails />
               </div>
           </div>
           
        </div>
      );

}
export default Services;