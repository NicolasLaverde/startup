window.onload= function(){

	var y=0;
	var xPosInitial=110;
	var yPosInitial=110;
	var xPos=xPosInitial;
	var yPos=yPosInitial;
	var orientation='DOWN';
	let directions=document.getElementsByClassName('buttons');
	var element = document.querySelector('.canvas');
	canvas= element.getContext('2d');
	callEvents();
	setInterval(animation, 10);


	function animation(){
		if(yPos>=400 && orientation==='DOWN'){
			yPosInitial=0;
			y=-130;
			console.log(element);
		}
		else if(yPos+140<=0 && orientation==='UP'){
			yPosInitial=0;
			y=400;
		}
		else if(xPos>=600 && orientation==='RIGHT'){
			xPosInitial=0;
			y=-130;
		}
		else if(xPos+10+140<=0 &&orientation==='LEFT'){
			xPosInitial=0;
			y=600;
		}
		canvas.clearRect(0,0,600,400);
		canvas.beginPath();	
		canvas.fillStyle='#00FFFF';
		canvas.strokeStyle='white';
		canvas.globalAlpha=0.8;
		if(orientation==='DOWN' || orientation==='UP'){
			yPos=yPosInitial+y;

			canvas.fillRect(xPos,yPos,120,120);
			canvas.strokeRect(xPos-10,yPos-10,140,140);
			//this erase an specific zone
			canvas.clearRect(xPos+10,yPos+10,100,100);

			
		}
		else if(orientation==='LEFT' || orientation==='RIGHT'){
			xPos=xPosInitial+y;
			canvas.fillRect(xPos,yPos,120,120);
			canvas.strokeRect(xPos-10,yPos-10,140,140);
			//this erase an specific zone
			canvas.clearRect(xPos+10,yPos+10,100,100);
		}
		if(orientation==='DOWN' || orientation==='RIGHT'){
			y+=1;}
		else if(orientation==='UP' || orientation==='LEFT'){y-=1;}

		
	}
	function callEvents(){
	for(let i=0; i<directions.length;i++){
		directions[i].addEventListener('click', function(e){
			e.preventDefault();
			console.log(i);
			switch (i){
				case 0: 
				if(orientation==='LEFT' || orientation==='RIGHT'){
						xPosInitial=xPosInitial+y;
						console.log('posicion inicial x: '+xPosInitial);
						console.log('posicion inicial y: '+yPosInitial);
						y=0;

					}
					orientation='UP';
					break;
				case 1: 
				if(orientation==='LEFT' || orientation==='RIGHT'){
						
						xPosInitial=xPosInitial+y;
						console.log('posicion inicial x: '+xPosInitial);
						console.log('posicion inicial y: '+yPosInitial);
						y=0;
					}
				orientation='DOWN';
				break;

				case 2: 
					if(orientation==='DOWN' || orientation==='UP'){
						yPosInitial=yPosInitial+y;
						console.log('posicion inicial x: '+xPosInitial);
						console.log('posicion inicial y: '+yPosInitial);
						y=0;
					}
					orientation='LEFT'; 
					break;
				
				case 3: 
				if(orientation==='DOWN' || orientation==='UP'){
						yPosInitial=yPosInitial+y;
						console.log('posicion inicial x: '+xPosInitial);
						console.log('posicion inicial y: '+yPosInitial);
						y=0;
					}
				orientation='RIGHT';
				break;
				 default: break;
			}
		});
	}	
	}

	//directions[i].addEventListener('click',fucn)
}