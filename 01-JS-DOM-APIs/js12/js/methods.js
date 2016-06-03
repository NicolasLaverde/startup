let dataMatrix=[];
//3 basic headers table
let headerstable=['Name', 'LastName', 'Age'];
window.onload=function(){
	let butonSave = document.getElementById('butonSave');
	
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
		dataMatrix.push(dataInput);
		console.log('long matrix' +dataMatrix.length);
		console.log(dataMatrix);	
		
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
		if(dataMatrix!==undefined && dataMatrix!==null 
			&& dataMatrix[0]!==undefined && dataMatrix[0]!== null){
			createTable(dataMatrix,headerstable);
		}
		else{
			alert('There is no Data');
		}

	});

	/* This method do all the magic creation of the table. using createElement, I create elemnt table, the headers cells with tag th, 
		multiples tr depending of how many registers has the dataMatrix
	   , 3 th for each person (I mean name, lastname ,age), 
	   Use method appendChild to connect with its parent. in this case, the tag tableDiv is the parent of table, grandparent of tr.. and so on
	*/
	function createTable(matrix){
		console.log(matrix[0].length);
		console.log(matrix.length);
		let table = document.createElement('table');
		table.className='table-fill';
		let tableDiv = document.getElementsByClassName('tableDiv')[0];

		/* headers*/
		let row= document.createElement('tr');
		row.className='tr-fill';
		for(var k=0; k<headerstable.length;k++){
			let column = document.createElement('th');
			column.innerHTML=headerstable[k];
			column.className='th-fill';
			row.appendChild(column);
		}
		table.appendChild(row);

		/* Items*/

		for(var i=0; i<matrix.length;i++){
			row=document.createElement('tr');
			row.className='tr-fill';
			for(var j=0; j<matrix[i].length;j++){
				let column = document.createElement('td');
				column.innerHTML=matrix[i][j];
				row.appendChild(column);		

				console.log(matrix[i][j]);
			}
			table.appendChild(row);	
		}
		if(table!=null){
			tableDiv.appendChild(table);
			}
	}
}