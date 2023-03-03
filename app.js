const value = document.querySelector("#value")
const input = document.querySelector("#sel_price")
value.textContent = input.value
input.addEventListener("input", (event) => {
  value.textContent = event.target.value
})


//to save inputs from html form into a text file

let saveFile = () => {
    	
    // Get the data from each element on the form.
    const fname = document.getElementById('fname');
    const lname = document.getElementById('lname');
    const email = document.getElementById('email');
    const dob = document.getElementById('dob');
    const phone = document.getElementById('phone');
    const price = document.getElementById('sel_price');
    const cardNum = document.getElementById('cardNumber');
    const cardExp = document.getElementById('cardExpiriy');
    const cardHol = document.getElementById('cardHolderName');
    const cardCvv = document.getElementById('cardCvv');
    const fTo = document.getElementById('fTo');
    const fFrom = document.getElementById('fFrom');
    const flightDate = document.getElementById('flightDate');
    const flightTime = document.getElementById('flightTime');
    
    // This variable stores all the data.
    let data = 
        '\r Passenger Details \r\n' +
        'First Name: ' + fname.value + ' \r\n ' + 
        'Last Name : ' + lname.value + ' \r\n ' +
        'D.O.B: ' + dob.value + ' \r\n ' + 
        'Email: ' + email.value + ' \r\n ' + 
        'Phone: ' + phone.value + ' \r\n\n ' +
        //'Message: ' + msg.value;
        'Price Details \r\n' +
        'Price: ' + price.value + ' \r\n\n ' + 
        'Card Details \r\n' +
        'Card number: ' + cardNum.value + ' \r\n ' + 
        'Card Holder Name : ' + cardHol.value + ' \r\n ' + 
        'Card Expiriy: ' + cardExp.value + ' \r\n ' + 
        'Card Cvv: ' + cardCvv.value + ' \r\n\n ' +
        'Flight Details \r\n' +
        'To: ' + fTo.value + ' \r\n ' + 
        'From : ' + fFrom.value + ' \r\n ' + 
        'Date: ' + flightDate.value + ' \r\n ' + 
        'Time: ' + flightTime.value + ' \r\n ' ;
    
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/plain' });
    const sFileName = Date()+'_bookFlight.txt';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click(); 
}