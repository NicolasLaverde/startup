let dataMatrix=[];
let Auxiliar=[];
//3 basic headers table
let tableheaders=['Name', 'LastName', 'Age'];
let table = document.createElement('table');
window.onload=function(){
	let butonSave = document.getElementById('butonSave');
	/* create headers*/
		Headers();
	/* Rigth here I declared an EventListener for my first button Save Data..
		This event Simply gets the values of the 3 inputs tag on my form. and add to a dataMatrix, that is my database structure.
		This event do a basic validation . alerts when something is void... or something like that,
	*/
	butonSave.addEventListener('click', function(e){
		e.preventDefault();
		let dataInput=[];
		let dataAux = document.getElementsByClassName('input');
		for(var i=0; i<dataAux.length;i++){
			if(dataAux[i].value!==''){
				dataInput.push(dataAux[i].value);	
			}
			else{
				alert('Fill all inputs ');
				dataAux[i].focus();
				return false;
			}
		}
		Auxiliar.push(dataInput);
		console.log('long matrix' +Auxiliar.length);
		console.log(Auxiliar);	
		
		for(var i=0; i<dataAux.length;i++){
			dataAux[i].value='';
		}
	});

	/* When a user sends the information. first, this piece of code (element event) verifies that my structure dataMatrix is not empty.
	I mean, must be at least one element One Person with (name,lastname,age). if that all is ok, call method createTable, if not sends alert to the user
	*/
	let butonSend = document.getElementById('butonSend');
	butonSend.addEventListener('click', function(e){
		e.preventDefault();
		if((Auxiliar!==undefined && Auxiliar!==null && Auxiliar[0]!==undefined && Auxiliar[0]!== null)){
			dataMatrix = Auxiliar.slice(0);
			createTable(tableheaders);
			Auxiliar=[];
		}
		else if(!(dataMatrix!==undefined && dataMatrix!==null && dataMatrix[0]!==undefined && dataMatrix[0]!== null)){
			alert('There is no Data');
		}

	});

	/* This method do all the magic creation of the table. using createElement, I create elemnt table, the headers cells with tag th, multiples tr depending of how many registers has the dataMatrix
	   , 3 th for each person (I mean name, lastname ,age), Use method appendChild to connect with its parent. in this case, the tag tableDiv is the parent of table, grandparent of tr.. and so on
	*/

	function Headers(){
		let thead = document.createElement('thead');
		let row= document.createElement('tr');
		row.className='tr-fill';
		for(var k=0; k<tableheaders.length;k++){
			let column = document.createElement('th');
			column.innerHTML=tableheaders[k];
			column.className='th-fill';
			row.appendChild(column);
		}
		thead.appendChild(row);
		table.appendChild(thead);
	}

	function Content(){
		let row;
		for(var i=0; i<Auxiliar.length;i++){
			row=document.createElement('tr');
			row.className='tr-fill';
			for(var j=0; j<Auxiliar[i].length;j++){
				let column = document.createElement('td');
				let columnText = document.createTextNode(Auxiliar[i][j]);
				column.appendChild(columnText);
				row.appendChild(column);		
				console.log(Auxiliar[i][j]);
			}
			table.appendChild(row);	
		}
	}
	function createTable(){
		console.log(Auxiliar[0].length);
		console.log(Auxiliar.length);
		table.className='table-fill';
		
		/* create Items*/
		Content();
		if(table!=null){
			let tableDiv = document.getElementsByClassName('tableDiv')[0];
			tableDiv.appendChild(table);
		}
	}
}