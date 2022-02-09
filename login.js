`use strict`
import * as DOM from './dom.js';

const loginErrorMsg = document.getElementById("login-error-msg");

$(function() {

    $('#login-form-link').click(function(e) {
		$("#login-form").delay(100).fadeIn(100);
 		$("#register-form").fadeOut(100);
		$('#register-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$('#register-form-link').click(function(e) {
		$("#register-form").delay(100).fadeIn(100);
 		$("#login-form").fadeOut(100);
		$('#login-form-link').removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

});


// When the login button is clicked, the following code is executed
DOM.loginButton.addEventListener("click", (e) => {
    // Prevent the default submission of the form
    e.preventDefault();
    // Get the values input by the user in the form fields
    let username = DOM.loginUser.value;
    let password = DOM.loginPass.value;

    if (username === "user" && password === "dev") {
        // If the credentials are valid, show an alert box and reload the page  
        window.location.replace("./homepage.html");	
		alert("You have successfully logged in.");
    } else {
        // Otherwise, make the login error message show (change its oppacity)
        loginErrorMsg.style.opacity = 1;
		//alert("You have not successfully logged in.");
		
    }
})
//function check() { /*function to check userid & password*/
	//
	
	
	// let users = [{
	// 	username: 'admin',
	// 	password: 'abc123'
	// },{
	// 	username: 'user1',
	// 	password: '321cba'
	// }];
	
	// 	const user = DOM.loginUser.value;
	// 	const pass = DOM.loginPass.value;
	
	// 	if (user === users.username.value && pass === users.password.value) {
	// 		alert("You have successfully logged in.");
	// 		location.reload();
	// 	} else {
	// 		loginErrorMsg.style.opacity = 1;
	// 	}
	



	// let index = users.indexof(function (user) {
	// 	return DOM.loginUser === user.username &&
	// 	DOM.loginPass === user.password;
	// })
	
	// if (index !== -1) {
	// 	window.open('./homepage.html')/*opens the target page while Id & password matches*/
	// }
	// else {
	// 	alert("Error Password or Username"
	// )/*displays error message*/	
	// }
//}
//DOM.loginButton.onclick = () => check();