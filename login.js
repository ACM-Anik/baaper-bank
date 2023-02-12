// Step-1: Add click event handler with submit button
document.getElementById('btn-submit').addEventListener('click', function(){
    // console.log('submit button');

    // Step-2: Get the email address inside the email input field
    // always remember to use .value to get text from an input field 
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: get the password
    // a: set id on the html element
    // b: get the element
    // c:get the value from the element

    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email, password);

    // DANGER: Do NOT VERIFY EMAIL PASSWORD ON THE CLIENT SIDE
    // sTEP-4: Verify email and password and cheak weather valid user or weather 
    if(email === 'sontan@gmail.com' && password === 'secret'){
        window.location.href = 'bank-html';
    }
    else{
        alert('You forget the password, for now , Im giving up you forever.');
    } 
})

