'use strict';
export default class Logger{
	constructor(){
		//bind the object this.log with the method Log of the class Logger... if we want to call Log() method we can use this.log. 
		this.log=this.Log.bind();
	}
	Log(info){
		 console.log(' The ' + info+ ' event has been emitted');		
	}
}