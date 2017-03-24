

//var myUsername = 'rayofhope.gs@gmail.com';
//var myPassword = 'itachi123';

	var i=0;
	if(i++ == 0){

	var myUsername; 
	var myPassword ;
	var myId; 
	var newURL ;

	myId = 'twitter';

	switch(myId){
		case 'stackoverflow': 
			newURL = "https://stackoverflow.com/users/login"; 
			myUsername = 'rayofhope.gs@gmail.com';
			myPassword = 'itachi123';

		break;
		case 'facebook': 
			newURL = "https://www.facebook.com/login/"; 
			myUsername = 'k.manish.5630@gmail.com';
			myPassword = 'minato123';

		break;
		case 'quora': 
			newURL = "https://www.quora.com/"; 
			myUsername = 'k.manish.5630@gmail.com';
			myPassword = 'quora123';

		break;
		case 'twitter':
			newURL = "https://twitter.com/login"; 
			myUsername = 'k.manish.5630@gmail.com';
			myPassword = 'twitter123';

		break;
		case 'pinterest':
			newURL = "https://www.pinterest.com/login/"; 
			myUsername = 'k.manish.5630@gmail.com';
			myPassword = 'pinterest123';

		break;


	}

	chrome.storage.local.set({'email': myUsername});
    chrome.storage.local.set({'pass': myPassword});
    chrome.storage.local.set({'id': myId});


		
	chrome.tabs.create({ url: newURL });



/*
all new urls are to be added to content scripts


*/
		
	    

		
		
		
	}
  


