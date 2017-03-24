//var background = chrome.extension.getBackgroundPage();
//chrome.runtime.sendMessage("hello");

    var myUsername = "";
	chrome.storage.local.get('email', function(result){
        myUsername = result.email;
        
   
	    var myPassword = "";
	    chrome.storage.local.get('pass', function(result){
	        myPassword = result.pass;


		   var myId = "";   
		   chrome.storage.local.get('id', function(result){
		        myId = result.id;
				//alert(""+myId);

				var loginField=null;
				var passwordField=null;
				var loginForm = null;
				var defaultReplace = null;


				switch(myId){
					case 'stackoverflow' :
						loginField = document.getElementById('email');
						passwordField = document.getElementById('password');
						loginForm = document.getElementById('submit-button');
						defaultReplace = "https://stackoverflow.com";
					break;

					case 'facebook' :
						loginField = document.getElementById('email');
						passwordField = document.getElementById('pass');
						loginForm = document.getElementById('loginbutton');
						defaultReplace = "https://facebook.com";
					break;

					case 'quora' :
						loginField = document.querySelectorAll('input[type=text]')[0];
						//alert(loginField.name);
						passwordField = document.querySelectorAll('input[type=password]')[0];
						//alert(passwordField.name);
						loginForm = document.querySelectorAll('button[type=submit]')[0];
						defaultReplace = null;
						
						//alert(loginForm.name);
						
					break;

					case 'twitter' :
						loginForm = document.querySelectorAll('button[type=submit]')[0];
						loginField = document.getElementsByClassName('js-username-field email-input js-initial-focus')[0];
						passwordField = document.getElementsByClassName('js-password-field')[0];
						//loginForm = document.getElementsByClassName("submit btn primary-btn");
						defaultReplace = null;
						//alert(loginField);
					break;

					case 'pinterest' :
						loginForm = document.querySelectorAll('button[type=submit]')[0];
						loginField = document.querySelectorAll('input[type=email]')[0];
						passwordField = document.querySelectorAll('input[type=password]')[0];
						//loginForm = document.getElementsByClassName("submit btn primary-btn");
						defaultReplace = null;
						//alert(loginForm.style);
						//alert(loginForm.name);
					break;

					default:
						alert("id not defined!");

				}

				/*
				if(myId == 'stackoverflow'){
session[username_or_email]
					loginField = document.getElementById('email');
					passwordField = document.getElementById('password');
					loginForm = document.getElementById('submit-button');
					defaultReplace = "https://stackoverflow.com";

				}else{
					alert("id not defined!");
				}  
				*/




				if(loginField == null || passwordField == null || loginForm ==null  ){
					//alert("hi");
					if(defaultReplace != null ){
						location.replace(defaultReplace);
					}
				}
				else {
					//alert("my");
					loginField.value = myUsername;
					
					passwordField.value = myPassword;
					//alert(loginForm.value);
					loginForm.click();
					//this.submit();
				}



					
				});
	 	});

	});

