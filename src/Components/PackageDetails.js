import React from  'react';
import Img1 from '../ExtraComponents/Images/img34.jpg';
import Img2 from '../ExtraComponents/Images/img35.jpg';
import { Link } from 'react-router-dom';



function PackageDetails(){

    return(

        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-4">
                   <img src={Img1} className="img-fluid pt-5"></img>
                </div>

                <div className="col-md-8">

                    <div className="col-md-6 w-100 text-warning">
                        <p className="h4 fw-bold mt-3">Hard Abs</p>
                        <p className="fw-light">How much can you change your physique in a certain amount of time?<br/>
                        Six-pack will make you the center of attention at the gym and in public. And If you want to strengthen your upper and lower bodies, 
                        the good news is that there are a wide range of exercises that we can help you do so.
                        </p>
                        <table className="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Period</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="col">Monthly</th>
                                    <th scope="col">Rs.5000.00</th>
                                </tr>
                                <tr>
                                    <th scope="col">Six Months</th>
                                    <th scope="col">Rs.28000.00</th>
                                </tr>
                                <tr>
                                    <th scope="col">Annualy</th>
                                    <th scope="col">Rs.54000.00</th>
                                </tr>    
                            </tbody>
                        </table>

                    </div>

                    <div className="col-md-6 w-100 text-warning">
                    <p className="h4 fw-bold mt-3">Cardio</p>
                        <p className="fw-light">Cardio keeps your heart in good condition and boosts energy while lowering stress levels.<br/>
                         However, how will you know if your cardio is getting better? It's measurable! We give you the freedom to test your limitations and achieve extraordinary achievements.
                        </p>
                        <table className="table table-dark table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Period</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="col">Monthly</th>
                                    <th scope="col">Rs.4000.00</th>
                                </tr>
                                <tr>
                                    <th scope="col">Six Months</th>
                                    <th scope="col">Rs.21000.00</th>
                                </tr>
                                <tr>
                                    <th scope="col">Annualy</th>
                                    <th scope="col">Rs.35000.00</th>
                                </tr>    
                            </tbody>
                        </table>

                    
                    </div>

                </div>
            </div>
            <div className="row justify-content-center">

                <div className="col-md-8">

                    <div className="col-md-6 w-100 text-warning">
                        <p className="h4 fw-bold mt-3">Personal Training</p>
                        <p className="fw-light">Personal trainers can create a training program, a nutrition plan, and an overall strategy to help their clients achieve their objectives.<br/>
                         Our personal training programs, which are led by expert personal trainers, provide customized sessions that are specifically tailored to your needs.</p>
                        <table className="table table-dark table-hover pb-4">
                            <thead>
                                <tr>
                                    <th scope="col">Period</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="col">Monthly</th>
                                    <th scope="col">Rs.10000.00</th>
                                </tr>
                                <tr>
                                    <th scope="col">Six Months</th>
                                    <th scope="col">Rs.53000.00</th>
                                </tr>
                                <tr>
                                    <th scope="col">Annualy</th>
                                    <th scope="col">Rs.90000.00</th>
                                </tr>    
                            </tbody>
                        </table>

                    </div>

                    <div className="col-md-6 w-100 text-warning">
                    <p className="h4 fw-bold mt-3">Senior Citizen</p>
                        <p className="fw-light">Exercise and nutrition are essential parts of a healthy lifestyle throughout one’s life.<br/>
                         If you’re an older adult looking to establish an exercise routine, we can provide exercises that helps you live a longer, healthier, and more enjoyable life.
                        </p>
                        <table className="table table-dark table-hover pb-4">
                            <thead>
                                <tr>
                                    <th scope="col">Period</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="col">Monthly</th>
                                    <th scope="col">Rs.4000.00</th>
                                </tr>
                                <tr>
                                    <th scope="col">Six Months</th>
                                    <th scope="col">Rs.21000.00</th>
                                </tr>
                                <tr>
                                    <th scope="col">Annualy</th>
                                    <th scope="col">Rs.35000.00</th>
                                </tr>    
                            </tbody>
                        </table>

                    
                    </div>

                </div>
                <div className="col-md-4">
                   <img src={Img2} className="img-fluid pt-5"></img>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-4 text-center">
                <div>
                
                <button type="button" className="btn btn-warning btn-lg text-dark"><Link to="/Registation" class="nav-link ">Registation</Link></button>
                </div>
            </div>
        </div>
        </div>

    );
}
export default PackageDetails;