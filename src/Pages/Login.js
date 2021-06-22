import React from 'react'; 
import LoginForm from '../Components/LoginForm';


function Login(){

    return (
        <div className="container">
            <div className="row text-center mt-3">
                <h1 className="display-4">Login</h1>
            </div>
            <div className="row ">
                <div className="col-12" >
                    <LoginForm />
                </div>
            </div>
        </div>
      );

}
export default Login;