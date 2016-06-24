var DB;
window.onload=function(){
	var i=1;
	document.Myform.MyTextArea.value=localStorage.getItem(document.Myform.MyTextArea.id);
	var request = indexedDB.open("MyTestDatabase2");

	initDataBase();
	var myBut = document.getElementById('MySaveBut');
	myBut.addEventListener('click', function(e){
		e.preventDefault();
		if (typeof Storage !== "undefined") {
			localStorage.setItem(document.Myform.MyTextArea.id,document.Myform.MyTextArea.value);
			addObject();
		}
	},false);
	
	var clearBut= document.getElementById('clearContent');
	clearBut.addEventListener('click', function(e){
		e.preventDefault();
		clearContent();
	});

	function initDataBase(){
		request.onerror = function(event) {
		console.log('error')
		};
		request.onsuccess = function(event) {
		  DB= event.target.result;
		};
		request.onupgradeneeded=function(e){
			DB= e.target.result;
			DB.createObjectStore('textA',{keyPath:'key'});	
		}
	
	}
	
	function getData(){
		var trans= DB.transaction(['textA'],"readonly");
		var cursor= trans.objectStore('textA').openCursor();
		cursor.addEventListener('success', function(e){
			var cursor=e.target.result;
				if(cursor){
					cursor.continue();
				}
		},false);

	}
	function addObject(){
		var data= document.Myform.MyTextArea.value;

		var trans= DB.transaction(['textA'],'readwrite');
		var add= trans.objectStore('textA').put({key: i, textArea: data});
		add.addEventListener('success',getData,false);
		
	}

	function clearContent(){
		var trans= DB.transaction(['textA'],'readwrite');
		var deleted= trans.objectStore('textA').clear();
		deleted.addEventListener('success', function(){
			localStorage.setItem(document.Myform.MyTextArea.id,'');
			document.Myform.MyTextArea.value=localStorage.getItem(document.Myform.MyTextArea.id);
		});
	}

	function handleFileSelect(e) {
	  		e.preventDefault();
	  		var files= e.dataTransfer.files;
	  		for(var f=0;f<files.length;f++){
	  			var file = files[f];
	  			
	  			console.log(file);

	  			if(!file.type.match('text.*')){
	  				continue;
	  				
	  			}
	  			var reader= new FileReader();
	  			
  				reader.onload= function(evt){
	  				var MyTextArea = document.querySelector('.textA');
	  				MyTextArea.value=evt.target.result;
	  				dropZone.innerHTML='name: ' + file.name +' - '+ 'type: ' + file.type + ' Size: ' + file.size + ' B';
	  				
  				}
	  			
	  			 // reed as text, and throw the onload event
	  			 reader.readAsText(file);
	  		}
	  		
	  }	

	  function handleDragOver(evt) {
	    evt.preventDefault();
	  }


	  // Setup the and listeners.
	  var dropZone = document.querySelector('.dropZone');

	  dropZone.addEventListener('dragenter', function(e){e.preventDefault();}, false);
	  dropZone.addEventListener('dragover', function(e){e.preventDefault()}, false);
	  dropZone.addEventListener('drop', handleFileSelect, false);
	
	
}