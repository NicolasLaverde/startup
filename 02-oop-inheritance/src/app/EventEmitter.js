'use strict';

export default class EventEmitter{
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