let buttonSubmit = document.getElementById('grid-submit');
//console.log(buttonSubmit);

buttonSubmit.addEventListener('click', function(){
	getGrid();
	
	
});


// function take input type text
// check if value is good : sum 12, only numbers

//build html

//setgrid


function checkGridData (inputValue) {
	let labelInfo = document.getElementById('grid-info');
	
	if (inputValue == null || inputValue == "") {
		labelInfo.innerHtml = "The filed is empty."
		return false;
	}
	console.log(dataGrid);
	let dataGrid = inputValue.split(",");
	console.log (dataGrid);
	
}

function getGrid () {
	let inputValue = document.getElementById('grid-input').value;
	
	
	checkGridData();
}

