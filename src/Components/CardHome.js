import React from 'react';
import Img1 from '../ExtraComponents/Images/img37.jpg';
import Img2 from '../ExtraComponents/Images/img36.jpg';
import Img3 from '../ExtraComponents/Images/img38.jpg';




function CardHome(){

    return (
            <div className="container-fluid" >
                <div class="row text-center justify-content-center">
                    
                    
                    <div className="col-md-3 align-self-center">
                        <div className="card bg-dark">
                             <img src={Img2} className="img-fluid" />

                            <div class="body  text-warning">
                            <h5 class="card-title txt-warning">Personal Traning</h5>
                            <p class="txt-warning">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat rutrum eros sit amet sollicitudin.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 align-self-center">
                        <div className="card bg-dark">
                           <img src={Img1} className="img-fluid" />
                            <div class="body  text-warning">
                            <h5 class="card-title">Hard Abs</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat rutrum eros sit amet sollicitudin. </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 align-self-center">
                        <div className="card bg-dark">
                            <img src={Img3} className="img-fluid" />

                            <div class="body bg-dark text-warning">
                            <h5 class="card-title">Cardio Traning</h5>
                            <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut volutpat rutrum eros sit amet sollicitudin.</p>
                            </div>
                        </div>
                    </div>
                    
            
                    
                </div>
            </div>
    );
}
export default CardHome;