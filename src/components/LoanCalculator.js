import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../layout/LoanCalc.css"
import Calculate from './LoanFormula'



function LoanCalculator() {
    return (
        <div class="col-md-12 paymentCalc">

        <div class="col-md-6">
      
          <form id="loanCalc" action="" method="get" class="">
            <div class="col-md-12">
              <h2>Calculate Your Auto Loan Payment</h2>
              <div class="form-group">
                <label for="vehiclePrice">Vehicle Price</label>
                <input type="text" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" class="form-control" id="vehiclePrice" placeholder="Vehicle Price"/>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="downPayment">Down Payment</label>
                <input type="text" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" class="form-control" id="downPayment" placeholder="Down Payment"/>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="tradeValue">Trade In Value</label>
                <input type="text" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" class="form-control" id="tradeValue" placeholder="Trade In Value"/>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="intRate">Interest Rate</label>
                <input type="text" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" class="form-control" id="intRate" placeholder="Interest Rate" />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="loanTerm">Loan Term</label>
                <input type="text" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');" class="form-control" id="loanTerm" placeholder="Loan Term (ex: 36 Months)"/>
              </div>
            </div>
            <div class="clearfix"></div>
            <div class="col-md-12">
              <a href="#" class="calcBtn" onClick={()=>{
        var vehiclePrice = document.getElementById('vehiclePrice').value,
            loanTerm = document.getElementById('loanTerm').value,
            intRate = document.getElementById('intRate').value,
            downPayment = document.getElementById('downPayment').value,
            tradeValue = document.getElementById('tradeValue').value,
            amount = parseInt(vehiclePrice),
            months = parseInt(loanTerm),
            down  = parseInt(downPayment),
            trade =  parseInt(tradeValue),
            totalDown  = down + trade,
            annInterest = parseFloat(intRate),
            monInt = annInterest / 1200;
      
            if(!amount){
              alert('Please add a loan amount');
              return;
            }
      
            if(!months){
              months = 60;
              loanTerm = document.getElementById('loanTerm').value = '60';
            }
      
            if(!downPayment){
              down = 0;
              downPayment = document.getElementById('downPayment').value = '0';
            }
      
            if(!trade){
              trade = 0;
              tradeValue = document.getElementById('tradeValue').value = '0';
            }
      
            if(!annInterest){
              annInterest = 3.25;
              intRate = document.getElementById('intRate').value = '3.25';
            }
      
      
            var calc = ((monInt + (monInt / (Math.pow((1 + monInt), months) -1))) * (amount - (totalDown || 0))).toFixed(2);
      
            var paymentResults = document.getElementById('paymentResults');
            paymentResults.style.display = 'block';
            paymentResults.innerHTML = '';
            var results = document.createElement('div');
            results.innerHTML = '<h1 style="text-align:center">Estimated Monthly Payment is:<br/></h1>' + '<h3 style="text-align:center">€' + calc + '/Month</h3>';
      
            paymentResults.append(results);
      
      
      }} id="calculate" value="Calulate">Calculate</a>
            </div>
          </form>
        </div>
        <div class="col-md-6">
          <div id="paymentResults">
      
          </div>
        </div>
      </div>
    )
    
}


export default LoanCalculator;