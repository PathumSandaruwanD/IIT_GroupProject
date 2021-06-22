import React from 'react';
import CreditForm from './CreditForm';

function RegForm(){
    return (

        <div className="container">
            <form>
            <div class="row g-3">
                <div className="col md-6">
                    <label for="inputFName" class="form-lable">First Name</label>
                    <input  class="form-control" id="inputFName" required></input>
                    <div class="invalid-feedback">
                First Name Required
              </div>
                </div>
                <div className="col md-6">
                    <label for="inputLName" class="form-lable">Last Name</label>
                    <input type="text" class="form-control" id="inputLName" required></input>
                    <div class="invalid-feedback">
                Last Name Required
              </div>
                </div>
            </div>
            <div class="row g-3">    
                <div className="col md-12">
                    <label for="inputAddress1" class="form-lable">Address Line One</label>
                    <input type="text" class="form-control" id="inputAddress1" required/>
                    <div class="invalid-feedback">
                Address Line One Required
              </div>
                </div>
            </div>
            <div class="row g-3">  
                <div className="col md-12">
                    <label for="inputAddress2" class="form-lable">Address Line Two</label>
                    <input type="text" class="form-control" id="inputAddress2" required/>
                </div>
            </div>
             <div class="row g-3">
                <div className="col md-6">
                    <label for="inputCity" class="form-lable">City</label>
                    <input type="text" class="form-control" id="inputCity" required/>
                    <div class="invalid-feedback">
                City Required
              </div>
                </div>
                <div class="col md-4">
                    <label for="inputProvince" class="form-label">Province</label>
                    <select id="inputProvince" class="form-select" required>
                    <option selected>...</option>
                    <option value="Western">Western</option>
                    <option value="Central">Central</option>
                    <option value="Southern">Southern</option>
                    <option value="Nothern">Nothern</option>
                    <option value="North Central">North Central</option>
                    <option value="Estern">Estern</option>
                    <option value="Uva">Uva</option>
                    <option value="Sabaragamuwa">Sabaragamuwa</option>
                    <option value="North Western">North Western</option>
                    </select>
                    
                </div>
                <div class="col md-4"></div>
            </div> 
            <div class="row g-3">
                <div className="col md-6">
                    <label for="mobile" class="form-lable">Mobile</label>
                    <input  class="form-control" id="mobile" required></input>
                    <div class="invalid-feedback">
                Mobile Number Required
              </div>
                </div>
                <div className="col md-6">
                    <label for="email" class="form-lable">Email</label>
                    <input type="text" class="form-control" id="email" placeholder="name@gmail.com" />
                </div>
            </div>
            </form>
            <div class="row g-3">
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="genderRadio" id="maleRadiobutton" value="Male"/>
                    <label class="form-check-label" for="maleRadiobutton">Male</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" name="genderRadio" id="femaleRadiobutton" value="Female"/>
                    <label class="form-check-label" for="femaleRadiobutton">Female</label>
                </div>
            </div>
            <div class="row g-3">
                <div className="col md-6">
                    <label for="height" class="form-lable">Height</label>
                    <input type="text" class="form-control" id="height" placeholder="cm" required />
                    <div class="invalid-feedback">
                Height Required
              </div>
                </div>
                <div className="col md-6">
                    <label for="weight" class="form-lable">Weight</label>
                    <input type="text" class="form-control" id="weight" placeholder="kg" required />
                    <div class="invalid-feedback">
                Weight Required
              </div>
                </div>
            </div>
            <hr></hr>
            <div class="row g-3">
                <div class="col md-12">
                <p>Please note any medical that could prevent certain acivities or requier adjusment to the traning program
                    (i.e. lifting restriction,mobility limitation, etc.). Such restriction are provided by a physcian.
                </p>
                </div>
            </div>
            <div class="row g-3">
                <input type="text" class="form-control" id="medicalCondition1" placeholder="Condition & Restriction" />
                <input type="text" class="form-control" id="medicalCondition2" placeholder="Condition & Restriction" />
                <input type="text" class="form-control" id="medicalCondition3" placeholder="Condition & Restriction" />
            </div>
            <div>
                <br/>
                <p>Emergency Contacts</p>
            <div class="row g-3">
                <div className="col md-4">
                    <input type="text" class="form-control" id="emergencyContactName" placeholder="Name" required/>
                </div>
                <div className="col md-4">
                    <input type="text" class="form-control" id="emergencyContactRelation" placeholder="Relationship" required/>
                </div>
                <div className="col md-4">
                    <input type="text" class="form-control" id="emergencyContactNumber" placeholder="Contact Number" required />
                </div>
                <div class="invalid-feedback">
                Required
              </div>
            </div>
            <br/>
            <div class="row g-3">
                <div className="col md-4">
                    <input type="text" class="form-control" id="emergencyContactName" placeholder="Name" />
                </div>
                <div className="col md-4">
                    <input type="text" class="form-control" id="emergencyContactRelation" placeholder="Relationship" />
                </div>
                <div className="col md-4">
                    <input type="text" class="form-control" id="emergencyContactNumber" placeholder="Contact Number" />
                </div>
            </div>
            </div>
            <div class="row g-3">
                <h5>Declaration</h5>

                <div class="form-check">
                    <input class="form-check-input" type="radio" name="declaration" id="declarationStatement" value="declarationStatement1" required/>
                    <label class="form-check-label" for="declarationStatement1">
                        <p>I here by declare that I oblige to the rules and regulations of the institute and the information provided above is true and correct according to the best of my knowledge. And I confirm that the above provided information regarding my health condition is true and correct and I'm totally responsible for any health complication that may occur apart from the information provided above</p>
                    </label>
                    <div class="invalid-feedback">
                Required
              </div>
                </div>
                <hr/>
            </div>
            <div class="row g-3">
                <h5>Registation Payment</h5>
    
                <div className="row">
                    <CreditForm />
                </div>
        </div>
    </div>
    );
}
export default RegForm;
