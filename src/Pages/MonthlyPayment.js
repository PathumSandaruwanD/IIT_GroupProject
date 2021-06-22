import React from 'react';
import CreditForm from '../Components/CreditForm';

function MonthlyPayment(){

    return (
        <div className="container-fluid">
            <div className="row ">
                <h1 className="display-4 text-center">Monthly Payment</h1>
            </div>
            <div className="row justify-content-center">
               
                <div className="col-sm-6">
                    <CreditForm />
                </div>
            </div>
        </div>
        
    );
}
export default MonthlyPayment;