'use strict';

import Movie from './movie.js';
import Logger from './Logger.js';
import Actor from './Actor.js';
import Social from './Social.js';
window.onload=function(){
	let movie=null;
	let actors=[];
	let addButt = document.getElementById('addButt');
	addButt.addEventListener('click',function(e){
		e.preventDefault();
		let moviesTittle= document.getElementById('moviesTittle').value;
		let year= document.getElementById('year').value;
		let duration= document.getElementById('duration').value	;
		if(moviesTittle!='' && year!= '' && duration!=''){
			movie = new Movie(moviesTittle,year,duration);
			let formActors = document.getElementById('actorsForm');
			formActors.classList.remove('formHidden');

			let addActor = document.getElementById('addActor');
			addActor.addEventListener('click', function(e){
				e.preventDefault();
				let actorName = document.getElementById('actorName');
				let age= document.getElementById('age');
				if(actorName!='' && age!=''){
					actors.push(new Actor(actorName.value,age.value));
					actorName.value='';
					age.value='';
					fillInfo();	
				}
			});

			
			if(movie!=null){	
				fillInfo();
			}
			if(actors.length>0){
				fillInfo();	
			}
			
		}
		else{
			alert('you must fill all fields');
		}

	});
	function fillInfo(){
		let infoDiv= document.getElementById('infoDiv');
		infoDiv.innerHTML='<p> <span class=\'titteSpan\'> Movie\'s Information </span></p> <ul> <li><span class=\'subTitteSpan\'> Tittle: </span>' + movie.tittle 
		+ '</li> <li> <span class=\'subTitteSpan\'> Year: </span>' + movie.year +'</li> <li> <span class=\'subTitteSpan\'>Running Time:</span>' + movie.duration +
		'</li><li> <span class=\'subTitteSpan\'> Actors: </span> ' + getActors() + '</li></ul>' ;
	}

	function getActors(){
		
		let returnVal= '<ul>';

		console.log(actors);
		for(var k in actors){
			console.log('entro aca');
			returnVal+='<li> <span class=\'subTitteSpan\'> Name: </span>' + actors[k].name + '<span class=\'subTitteSpan\'> Age: </span>' + actors[k].age +' </li>';
		}

		returnVal+='</ul>';
		return returnVal;
	
	}
	
	test();
	
}

function test(){
	function playWithMovie(movie){
		let logger= new Logger();
		movie.on('play',logger.log);
		movie.play();
		let obj= Object.assign(movie,Social);
		movie.like('Jorge Nicolas');
		movie.share('Orlando')
		//9 point 
		movie.getActors();
	
	}
	console.log('Test ');
	let terminator = new Movie('Terminator I', 1985, 60);
	let arnold = new Actor('Arnold Schwarzenegger', 50);
	let otherCast = [
		 new Actor('Paul Winfield', 50),
		 new Actor('Michael Biehn', 50),
		 new Actor('Linda Hamilton', 50)
	];

	terminator.addCast(arnold);
	terminator.addCast(otherCast); 

	playWithMovie(terminator);
}