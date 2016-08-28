window.onload=function(){

	function AjaxReq(objectConfig){
		return new Promise(function(resolve,reject){

			var httpRequest = new XMLHttpRequest();
			httpRequest.onreadystatechange = function(){
				if (httpRequest.readyState === 4 && httpRequest.status === 200) {
					//console.log(JSON.parse(httpRequest.responseText).items[0]);
					resolve(JSON.parse(httpRequest.responseText).items);
				}
				else if((httpRequest.status>=400 || httpRequest.status===0) && httpRequest.readyState===4){
					reject("Occurs an error!!");
				}
			}
			httpRequest.open(objectConfig.method,objectConfig.url,true );
			httpRequest.send();
	   });
		
	}

	function removeAllChilds(a)
	 {
		 var element=document.getElementById(a);
		 while(element.hasChildNodes()){
			element.removeChild(element.firstChild);	
		 }
	 }
	function AjaxCall(obj){
		let ol =document.createElement('ol');
		let section = document.getElementById('sectionJson');
		removeAllChilds('sectionJson');
		console.log(AjaxReq(obj));
		AjaxReq(obj)
		.then(function(text){
			if(text.length!==0){

				console.log(text.length);
				for(var i=0; i<text.length;i++){
					var li = document.createElement('li');
				 
				 li.appendChild(document.createTextNode(text[i].full_name));
	      		 ol.appendChild(li);
				}
				section.appendChild(ol);
				
      		}
		}).catch(function(e){
			section.innerHTML = e;
			section.style.color='white';

		});	
	}
	var buttonP= document.getElementById('buttonPromise');
	buttonP.addEventListener('click',function(){
    	AjaxCall({ 'url': 'https://api.github.com/search/repositories?q=\'javascript\'', 'method':'GET'});		
	});


	var erroB=document.getElementById('errorButton');
	erroB.addEventListener('click', function(){
		AjaxCall({ 'url': 'http://api.icndbs.com/jokes/', 'method':'GET'});
	});

	var buttonSearch = document.getElementById('buttonSearch');
	var input = document.getElementsByClassName('repoSearch')[0];
	
	buttonSearch.addEventListener('click', function(){
		if(input.value!==''){
			AjaxCall({ 'url': 'https://api.github.com/search/repositories?q=\'' + input.value + '\'', 'method':'GET'});			
		}
	})

}
