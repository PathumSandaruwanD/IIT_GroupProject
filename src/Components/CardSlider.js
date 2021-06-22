import React from 'react';
import Img1 from '../ExtraComponents/Images/img15.png';
import Img2 from '../ExtraComponents/Images/img16.png';
import Img3 from '../ExtraComponents/Images/img17.png';
import Img4 from '../ExtraComponents/Images/img18.png';


function CardSlider(){
    return(
        <div class="container text-center" className="homeCard">
        <div class="row text-center">
            <h1 className="display-4"><b>Select Your Goal</b></h1>
            <p className="lead">Fitness Nation offers a variety of custom-designed fitness, health, and workout sessions guided by some of Sri Lanka's most experienced and professional fitness trainers. Please do not hesitate to contact us to discuss the best choice for your needs.</p>
            
            <div className="col-md-3 ">
                <div className="card shadow bg-dark">
                   <img src={Img1} className="img-fluid " />
                    <div className="body  text-warning">
                    <h5 class="card-title">Hard Abbs Traning</h5>
                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat rutrum eros sit amet sollicitudin. </p>
                   
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card shadow bg-dark">
                     <img src={Img2} className="img-fluid " />
                    <div className="body  text-warning">
                    <h5 class="card-title ">Cardio Traning</h5>
                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat rutrum eros sit amet sollicitudin.</p>
                    
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card shadow bg-dark ">
                    <img src={Img3} className="img-fluid " />
                    <div className="body  text-warning">
                    <h5 class="card-title">Personal Traning</h5>
                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat rutrum eros sit amet sollicitudin.</p>
                    
                    </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="card shadow bg-dark">
                    <img src={Img4} className="img-fluid " />
                    <div className="body  text-warning">
                    <h5 class="card-title">Senior Citizen Traning</h5>
                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat rutrum eros sit amet sollicitudin.</p>
                    
                    </div>
                </div>
            </div>
            
    
            
        </div>
    </div>

   
    );
}
export default CardSlider;