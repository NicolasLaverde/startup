window.onload=function(){


	var myBut=document.getElementById('myButton');
	fadeIn();
	myBut.addEventListener('click', function(){

		var httpRequest = new XMLHttpRequest();
		httpRequest.onreadystatechange = function(){
			/*readyState--> 0: REQUEST NOT INITIALIZED
							1: SEVER CONNECTION STABLISHED
							2: REQUEST RECEIVED
							3: PROCESSING REQUEST
							4: REQUEST FINISH AND RESPONSE IS READY 

			  status        200:OK
			                404 page not found 				*/
			if (httpRequest.readyState === 4 && httpRequest.status === 200) {
      				document.getElementById("sectionJson").innerHTML += JSON.parse(httpRequest.responseText).value.joke;
      				document.getElementById('sectionJson').style.background='#04B4AE'; 
    			}

    		if( (httpRequest.status>=400 || httpRequest.status===0) && httpRequest.readyState===4){
    				document.getElementById('sectionJson').style.background='red'; 
    		}
		}
		httpRequest.open("GET", "http://api.icndb.com/jokes/random. ", true);
  		httpRequest.send();
	});

	function AjaxReq(objectConfig){
		return new Promise(function(resolve,reject){

			var httpRequest = new XMLHttpRequest();
			httpRequest.onreadystatechange = function(){
				if (httpRequest.readyState === 4 && httpRequest.status === 200) {
					resolve(JSON.parse(httpRequest.responseText));
				}
				else if((httpRequest.status>=400 || httpRequest.status===0) && httpRequest.readyState===4){
					reject("Occurs an error!!");
				}
			}
			httpRequest.open(objectConfig.method,objectConfig.url,true );
			httpRequest.send();
	   });
		
	}

	function AjaxCall(obj){
		let section =document.getElementById("sectionJson");
		AjaxReq(obj)
		.then(function(text){
      		section.innerHTML = text.value.joke;
      		section.style.background='#04B4AE'; 
		}).catch(function(e){
			section.style.background='red'; 
			section.innerHTML = e;
			section.style.color='white';

		});	
	}
	var buttonP= document.getElementById('buttonPromise');
	buttonP.addEventListener('click',function(){
    AjaxCall({ 'url': 'http://api.icndb.com/jokes/random', 'method':'GET'});		
	});


	var erroB=document.getElementById('errorButton');
	erroB.addEventListener('click', function(){
		AjaxCall({ 'url': 'http://api.icndbs.com/jokes/', 'method':'GET'});
	});
	


	function fadeIn(){
		let sectionHidden = document.getElementById('sectionHidden');
			if(sectionHidden !==null){
				
				if(sectionHidden.classList.contains('hidden')){
					sectionHidden.classList.remove('hidden');
				}

			}
		}

}
