import React from 'react';
import {Link} from 'react-router-dom';

function LoginForm(){
    return(
        <div className="container ">
            <div className="row justify-content-center">
                
            <div className="col-12 " class="loginform">
                <form> 
                    <div className="form-group col-md-6">
                        <label for="emailInput">Email address</label>
                        <input type="email" className="form-control" id="emailInput" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="passwordInput">Password</label>
                        <input type="password" className="form-control" id="passwordInput" placeholder="Password"></input>
                    </div>
                    <div className="content-justify-center text-center">
                    <button type="submit" className="btn btn-warning btn-rounded text-center">Submit</button>
                    </div>
                    
                </form>
            </div>
            

            
        </div>
        </div>
        
        
    );
}
export default LoginForm;