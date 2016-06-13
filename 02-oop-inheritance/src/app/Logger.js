'use strict';
export default class Logger{
	constructor(){
		this.log=this.Log.bind();
	}
	Log(info){
		 console.log(' The ' + info+ ' event has been emitted');		
	}
}