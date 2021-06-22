import React from 'react';
import Img1 from '../ExtraComponents/Images/img32.png';
import Img2 from '../ExtraComponents/Images/img31.png';
import Img3 from '../ExtraComponents/Images/img34.png';
import Img4 from '../ExtraComponents/Images/img33.png';


function OurStaffCards(){

    return(

        <div className="container bg-dark text-center">
            <div className="row justify-content-center">
                <div className="col-md-3">
                    <div className="card bg-warning">
                        <img src={Img1} className="img-fluid" />
                        <div className="card-body bg-dark text-warning">
                            <h5 className="card-title">Ron</h5>
                            <p><i>Head Trainer</i></p>
                            <p >Ron first got into Crossfit in 2015 as a member at Crossfit Youth and became an over night addict, not only to the results of the workouts but to the community of people. Fitness has always played a major part in Ron’s life, as a teenager he was playing national level hockey and competing in Athletics.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-warning">
                            <img src={Img2} className="img-fluid" />
                            <div className="card-body bg-dark text-warning">
                            <h5 className="card-title">Janelle </h5>
                            <p><i>Cardio Trainer</i></p>
                            <p >Janelle first got into Crossfit in 2015 as a member at Crossfit Youth and became an over night addict, not only to the results of the workouts but to the community of people. Fitness has always played a major part in Janelle’s life, as a teenager he was playing national level hockey and competing in Athletics.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-warning">
                            <img src={Img3} className="img-fluid" />
                            <div className="card-body bg-dark text-warning">
                            <h5 className="card-title">Liam</h5>
                            <p><i>Personal Trainer</i></p>
                            <p>Liam first got into Crossfit in 2015 as a member at Crossfit Youth and became an over night addict, not only to the results of the workouts but to the community of people. Fitness has always played a major part in Liam’s life, as a teenager he was playing national level hockey and competing in Athletics.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-warning">
                             <img src={Img4} className="img-fluid" />
                            <div className="card-body bg-dark text-warning">
                            <h5 className="card-title">Matthew</h5>
                            <p><i>Crossfit Trainer</i></p>
                            <p>Matthew first got into Crossfit in 2015 as a member at Crossfit Youth and became an over night addict, not only to the results of the workouts but to the community of people. Fitness has always played a major part in Matthew’s life, as a teenager he was playing national level hockey and competing in Athletics.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default OurStaffCards;