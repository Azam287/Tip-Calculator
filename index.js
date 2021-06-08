var billAmt = 0
var tipPerc = 10
var totalBill = 0
var count = 1


function validEntryCheck() {

    const regex = new RegExp('\d')

    // Checking count is <= 0 and does not contain character
    if(Number(document.getElementById('no_people').value)<=0 || (regex.test(document.getElementById('no_people').value)) ){
        document.getElementById('no_people').value=1
        count=1
    }
    else count=document.getElementById('no_people').value

    // Checking bill amount < 0 and does not contain character
    if(Number(document.getElementById('bill_amt').value )< 0 || (regex.test(document.getElementById('bill_amt').value)) ){
        document.getElementById('bill_amt').value=0
        billAmt=0
    }
    else billAmt=document.getElementById('bill_amt').value

    // Checking tip_perc < 0 and does not contain character
    if(Number(document.getElementById('tip_perc').value)<0 || (regex.test(document.getElementById('tip_perc').value)) ){
        document.getElementById('tip_perc').value=0
        tipPerc=0
    }
    else tipPerc=document.getElementById('tip_perc').value

}


function tipCalc() {

    validEntryCheck()
    
    // Calcultaing tip percentage
    tipPerc = billAmt*(tipPerc/100)
    totalBill = (Number(billAmt)+Number(tipPerc))/Number(count)

    // Setting tip and total bill values
    document.getElementById('tip_value').innerHTML=tipPerc
    document.getElementById('total_bill').innerHTML=totalBill

    
}

// Counter for number of people
function tipPeopleCounter(flag)  {
    count = document.getElementById('no_people').value

    if(flag===1){
        document.getElementById('no_people').value = Number(count)+1
        count = document.getElementById('no_people').value
    } 
    else if(count>1 && flag===0) {
        document.getElementById('no_people').value = Number(count)-1
        count = document.getElementById('no_people').value
    }
    // Calculating tip and total amount after incrementing or decrementing people
    tipCalc()
}

// Counter for the percentage
function tipPercentCounter(flag) {
    tipPerc = document.getElementById('tip_perc').value

    if(flag===1){
        document.getElementById('tip_perc').value = Number(tipPerc)+1
        tipPerc = document.getElementById('tip_perc').value
    } 
    else if(tipPerc>0 && flag===0) {
        document.getElementById('tip_perc').value = Number(tipPerc)-1
        tipPerc = document.getElementById('tip_perc').value
    }
    // Calculating tip and total amount after incrementing or decrementing percentage
    tipCalc()
}