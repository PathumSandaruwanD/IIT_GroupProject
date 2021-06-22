import React from 'react';

function CreditForm(){

    return (
        <div className="container-fluid  ">
            <form>
            <div className="row-payment">
            <div className="row g-3 ">
                <div className="col-sm-6">
                    <label for="FName" class="form-lable">First Name</label>
                    <input  class="form-control" id="FName" placeholder="Kasun" required></input>
                    <div className="invalid-feedback">Valid First Name Required</div>
                </div>
                <div className="col-sm-6">
                    <label for="LName" class="form-lable">First Name</label>
                    <input  class="form-control" id="LName" placeholder="Manjula" required></input>
                    <div className="invalid-feedback">Valid First Name Required</div>
                </div>
            </div>
            <div class="my-3 ">
            <div class="form-check">
              <input id="credit" name="paymentMethod" type="radio" class="form-check-input" checked required/>
              <label class="form-check-label" for="credit">Credit card</label>
            </div>
            <div class="form-check">
              <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required/>
              <label class="form-check-label" for="debit">Debit card</label>
            </div>
            <div class="form-check">
              <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required/>
              <label class="form-check-label" for="paypal">PayPal</label>
            </div>
          </div>

          <div class="row gy-3">
            <div class="col-md-6">
              <label for="cc-name" class="form-label">Name on card</label>
              <input type="text" class="form-control" id="cc-name" placeholder="" required/>
              <small class="text-muted">Full name as displayed on card</small>
              <div class="invalid-feedback">
                Name on card is required
              </div>
            </div>

            <div class="col-md-6">
              <label for="cc-number" class="form-label">Credit card number</label>
              <input type="text" class="form-control" id="cc-number" placeholder="" required/>
              <div class="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-expiration" class="form-label">Expiration</label>
              <input type="text" class="form-control" id="cc-expiration" placeholder="02/30" required/>
              <div class="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-cvv" class="form-label">CVV</label>
              <input type="text" class="form-control" id="cc-cvv" placeholder="123" required/>
              <div class="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>
            <div className="row justify-content-center">
            <div className="btn">
            <button class="w-50 btn btn-warning btn-lg" type="submit">Continue to checkout</button>
            </div>
           
            </div>
            </div>
            </form>
        </div>
        
    );
}
export default CreditForm;