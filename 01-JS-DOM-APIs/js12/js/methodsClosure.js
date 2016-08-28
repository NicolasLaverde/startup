let dataMatrix=[];
let Auxiliar=[];
let table=null;
let tableheaders=['Name', 'LastName', 'Age'];

window.onload=function(){
	let butonSave = document.getElementById('butonSave');
	
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
		showTable(dataInput);
		
		for(var i=0; i<dataAux.length;i++){
			dataAux[i].value='';
		}
	});

	function showTable(data){
		if(table===null){
			table = new Table();
			let tableDiv = document.querySelector('.tableDiv');
			tableDiv.appendChild(table.createTable());
		}
		table.addContent(data);
	}

	var Table = function(){
		let table = document.createElement('table');
		let tbody = document.createElement('tbody');
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
			return thead;
		}

		this.addContent = function(data){
			let row;
			row=document.createElement('tr');
			row.className='tr-fill';
			for(var i=0; i<data.length;i++){
				
				let column = document.createElement('td');
				let columnText = document.createTextNode(data[i]);
				column.appendChild(columnText);
				row.appendChild(column);		
			}
			tbody.appendChild(row);
		}
		this.createTable= function(){
			table.className='table-fill';
			table.appendChild(Headers());
			table.appendChild(tbody);
			return table;
		}
	};
}