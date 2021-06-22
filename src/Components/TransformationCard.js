import React from 'react';
import Img1 from '../ExtraComponents/Images/img19.jpg';
import Img2 from '../ExtraComponents/Images/img20.jpg';
import Img3 from '../ExtraComponents/Images/img21.jpg';
import Img4 from '../ExtraComponents/Images/img22.jpg';
import Img5 from '../ExtraComponents/Images/img23.jpg';
import Img6 from '../ExtraComponents/Images/img24.jpg';
import Img7 from '../ExtraComponents/Images/img25.jpg';
import Img8 from '../ExtraComponents/Images/img26.jpg';

function TransformationCard(){

    return(
      <div className="container-fluid">
          <div className="row g-3 justify-content-center">
            <div className="col-3">
                 <div className="card shadow bg-dark text-warning">
                    <img src={Img1} className="img-fluid " />
                        <div className="body" >
                        <p className="h5">Body transformation1</p>
                    </div>
                </div>
          </div>
          <div className="col-3">
                 <div className="card shadow bg-dark text-warning">
                    <img src={Img2} className="img-fluid " />
                        <div class="body" >
                        <p className="h5">Body transformation1</p>
                    </div>
                </div>
          </div>
          <div className="col-3">
                 <div className="card shadow bg-dark text-warning ">
                    <img src={Img3} className="img-fluid " />
                        <div class="body" >
                        <p className="h5">Body transformation1</p>
                    </div>
                </div>
          </div>
          
      </div> 
      <div className="row g-3">
            <div className="col-3">
                 <div className="card shadow bg-dark text-warning">
                    <img src={Img5} className="img-fluid " />
                        <div className="body" >
                        <p className="h5">Body transformation1</p>
                    </div>
                </div>
          </div>
          <div className="col-3">
                 <div className="card shadow bg-dark text-warning">
                    <img src={Img6} className="img-fluid " />
                        <div class="body" >
                        <p className="h5">Body transformation1</p>
                    </div>
                </div>
          </div>
          <div className="col-3">
                 <div className="card shadow bg-dark text-warning ">
                    <img src={Img7} className="img-fluid " />
                        <div class="body" >
                        <p className="h5">Body transformation1</p>
                    </div>
                </div>
          </div>
          <div className="col-3">
                 <div className="card shadow bg-dark text-warning ">
                    <img src={Img8} className="img-fluid " />
                        <div class="body">
                        <p className="h5">Body transformation1</p>
                    </div>
                </div>
          </div>
      </div> 
    </div> 
    );

}
export default TransformationCard;