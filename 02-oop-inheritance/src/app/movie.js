'use strict';


import EventEmitter from './EventEmitter.js';
import Actor from './Actor.js';

export default class Movie extends EventEmitter{
	constructor(tittle, year,duration){
		super();
		this.tittle=tittle;
		this.year=year;
		this.duration=duration;
		this.actors=[];

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
    console.log('Resume >> ' +this.tittle + '(' + this.yr   + '-' + this.duration + ') :');
	}

	addCast(actor){

		if(Array.isArray(actor)){
			this.actors= this.actors.concat(this.actors,actor);
		}
		else{
			this.actors.push(actor);
		}
	}
	getActors(){
		if(this.actors!=null){
			console.log('Actors of ' + this.tittle + " are: ");
			for(let i in this.actors){
				/*this is wrong. doesnt work like in java... if i put this, javascript will belive this.actors are  an string
				console.log('- ' + this.actors[i]);*/
				console.log('- Name: '+ this.actors[i].name + ' Age: ' + this.actors[i].age);
			}
		}
		else{
			console.log('There not any actor');
		}
	}
}


