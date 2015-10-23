$(document).ready(function(){
	$("#login-form-link").click(function(e){
		$("#login-form").delay(100).fadeIn(100);
		$("#register-form").fadeOut(100);
		$("#register-form-link").removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});
	$("#register-form-link").click(function(e){
		$("#register-form").delay(100).fadeIn(100);
		$("#login-form").fadeOut(100);
		$("#login-form-link").removeClass('active');
		$(this).addClass('active');
		e.preventDefault();
	});

	$("#register-form").on("submit", function(event){
		$('.form-error').css({'display': 'none'});
		var $usernameInput = $("#username");
		var $emailInput = $("#email");
		var $passwordInput = $("#password");
		var $confirmPassword = $("#confirm-password");
		var $span = $(".form-error");
		var nameMatch = /[\w\[\]`!@#$%\^&*()={}:;<>+'-]*/;
		var emailMatch = /^[a-zA-Z0-9_,+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9,]+$/;
		var passwordMatch = /[\w\[\]`!@#$%\^&*()={}:;<>+'-]*/;

		validate($usernameInput, nameMatch, "Required", "Alphanumeric characters only");
		validate($emailInput, emailMatch, "Required", "Must be a valid email address");
		if($passwordInput.val() === $confirmPassword.val()){
			validate($passwordInput, passwordMatch, "Required", "Only alphanumeric and special characters...no spaces");
			//validateInput($confirmPassword, passwordMatch, "Required", "Only alphanumeric and special characters...no spaces")
		} else {
			$passwordInput.next("p").text("Passwords must match").css("display", "block");

		}
		
	});

	/*function validateInput(input, regx, errorMessage){
		if(input.val() === '' || !regx.test(input.val())){
			event.preventDefault();
			console.log(errorMessage);
			input.next()
			//$(".lead").append($p);
			input.parent().css("background-color", "FF4545");
		}
	}*/

	function validate(input, regx, error1, error2){
		if(input.val() === ''){
			event.preventDefault();
			input.next("p").text(error1).css("display", "block");
		} else if(!regx.test(input.val())){
			event.preventDefault();
			input.next("p").text(error2).css("display", "block");
		}
	}
});