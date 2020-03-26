let buttonSubmit = document.getElementById('grid-submit');

buttonSubmit.addEventListener('click', function(){
	getGrid();
	
});
//function get data for grid system, invokes functions for  validating given data, showing Grid and showing Code for grid
function getGrid () {
	let inputValue = document.getElementById('grid-input').value;
	let labelInfo = document.getElementById('grid-info');
	let checkedData = false;
	let dataGrid = [];

	checkedData = checkGridData(inputValue, dataGrid);

	if ( checkedData ) {
		showGrid(dataGrid);
		showGridCode(dataGrid);
	} else {
		labelInfo.innerHTML = "You gave wrong data."
	}
}//getGrid


//function is validating data given by user
function checkGridData (inputValue, dataGrid) {
	let dataGridInput = inputValue.split(",");
	let numberOfData = 0;
	let sumOfGridData = 0;

	if (inputValue == null || inputValue == "") {
		checkedData = false
		return checkedData;
	}
	
	for ( let item of dataGridInput ) {
		 dataGrid[numberOfData] = Number(item, 10);
		 numberOfData+= 1;
	}
	
	for ( let data of dataGrid ) {
		if ( Number.isInteger(data) && data <= 12 ) {
			sumOfGridData+=data;
		} else {
			checkedData = false;
			break;
		}
	}
	if ( sumOfGridData === 12 ) {
		checkedData = true;
	} else { checkedData = false;}

	return checkedData;
}//checkGridData

//function is showing the Grid in website
function showGrid (dataGrid) {
	let gridShow = document.getElementById('grid-floats__show');
	let gridContainerStart = '<div class="grid-container">'
	let gridEnd = '</div>';
	let gridRowStart = '    <div class="clearfix row">'
	let gridEndRow = '    </div>';
	let gridColumns = '';
	let numberOfCloumn = 1;

	for ( let element of dataGrid  ) {
		console.log(element);
		gridColumns = gridColumns + '    <div class="column-' + element.toString() + '">' + 'Column ' + numberOfCloumn.toString() + '</div>' + '\n';

		numberOfCloumn+=1;
	}//for
	gridShow.innerHTML = gridContainerStart + gridRowStart + gridColumns + gridEndRow + gridEnd;
	console.log(gridColumns);
}//showGrid

//function is showing code for gird in website
function showGridCode (dataGrid) {
	
	let gridCode = document.getElementById('grid-floats__code');
	let gridContainerStart = '&lt;div class="grid-container"&gt; \n'
	let gridEnd = '&lt;/div&gt;';
	let gridRowStart = '    &lt;div class="row"&gt;\n'
	let gridEndRow = '    &lt;/div&gt;\n';
	let gridColumns = '';
	
	let numberOfCloumn = 1;

	for ( let element of dataGrid  ) {	
		gridColumns = gridColumns + '        &lt;div class="column-' + element.toString() + '"&gt;' + 'Column ' + numberOfCloumn.toString() + '&lt;/div&gt;\n';
		numberOfCloumn+=1;
	}
	gridCode.innerHTML =  gridContainerStart + gridRowStart + gridColumns + gridEndRow + gridEnd;
} //showGridCode()