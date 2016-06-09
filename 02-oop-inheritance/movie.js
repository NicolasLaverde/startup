'use strict';

class EventEmitter{
	constructor(){
		this.callBackFunctions=Object.create(null);
	}

	on(event, callBack){
		this.callBackFunctions[event]= callBack;
	}
	emit(event){
		let callBack=this.callBackFunctions[event];
		if(typeof callBack =='undefined'){
			console.log('You have an Error!')
		}
		else{
			callBack(event);
		}
	}
	off(event){
		
	}

}
class Logger{
	constructor(){
		this.log=this.Log.bind();
	}
	Log(info){
		 console.log(' The ' + info+ ' event has been emitted');		
	}
}
class Movie extends EventEmitter{
	constructor(tittle, year,duration){
		super();
		this.tittle=tittle;
		this.year=year;
		this.duration=duration;
	}
	play(){
     this.emit('play');
    console.log('Play > ' +this.tittle + '(' + this.year   + '-' + this.duration + ') :');
		
	}
	pause(){
		emit('pause');
    console.log('Pause || ' +this.tittle + '(' + this.year   + '-' + this.duration + ') :');
	}
	resume(){
		emit('resume');
    console.log('Resume >> ' +this.tittle + '(' + this.year   + '-' + this.duration + ') :');
	}
}
let Social ={
	share: function(friendName)
	{
		console.log(`${friendName} share  ${this.tittle}`);
	},
	like: function(friendName)
	{
		console.log(`${friendName} likes ${this.tittle}`);
	}
}

function playWithMovie(movie){
	let logger= new Logger();
	movie.on('play',logger.log);
	movie.play();
	let obj= Object.assign(movie,Social);
	movie.like('Jorge Nicolas');
	movie.share('Orlando')
}
console.log('Test ');
let movie= new Movie('finding Nemo',2004, '90 min');

let movie1= new Movie('Civil War',2016,'120 min');
playWithMovie(movie);