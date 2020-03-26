var gridSystemFloats = {};

(function() {
	

	this.clearGridSystem = function() {
		let gridShow = document.getElementById('grid-floats__show');
		let gridShowCode = document.getElementById('grid-floats__code');
		gridShow.classList.add('hidden');
		gridShowCode.classList.add('hidden');
		gridShow.innerHTML = '';
		gridShowCode.innerHTML = '';
	}
	//function get data for grid system, invokes functions for  validating given data, showing Grid and showing Code for grid
	this.getGrid = function() {
		let inputValue = document.getElementById('grid-floats__input').value;
		let labelInfo = document.getElementById('grid-floats__info');
		let checkedData = false;
		let dataGrid = [];

		checkedData = checkGridData(inputValue, dataGrid);

		if ( checkedData ) {
			showGrid(dataGrid);
			showGridCode(dataGrid);
		} else {
			labelInfo.innerHTML = "You gave wrong data. There must be integers from 1 to 12 and their summ must be 12"
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
			if ( Number.isInteger(data) && data <= 12 && data != 0 ) {
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
			gridColumns = gridColumns + '    <div class="column-' + element.toString() + '">' + 'Column ' + numberOfCloumn.toString() + '</div>' + '\n';

			numberOfCloumn+=1;
		}//for
		gridShow.classList.remove('hidden');
		gridShow.innerHTML = gridContainerStart + gridRowStart + gridColumns + gridEndRow + gridEnd;
	}//showGrid

	//function is showing code for gird in website
	function showGridCode (dataGrid) {
		
		let gridCode = document.getElementById('grid-floats__code');
		let gridContainerStart = '&lt;div class="grid-container"&gt; \n'
		let gridEnd = '&lt;/div&gt;';
		let gridRowStart = '    &lt;div class="clearfix row"&gt;\n'
		let gridEndRow = '    &lt;/div&gt;\n';
		let gridColumns = '';
		
		let numberOfCloumn = 1;

		for ( let element of dataGrid  ) {	
			gridColumns = gridColumns + '        &lt;div class="column-' + element.toString() + '"&gt;' + 'Column ' + numberOfCloumn.toString() + '&lt;/div&gt;\n';
			numberOfCloumn+=1;
		}
		gridCode.classList.remove('hidden');
		gridCode.innerHTML =  gridContainerStart + gridRowStart + gridColumns + gridEndRow + gridEnd;
	} //showGridCode()
}).apply(gridSystemFloats);


let buttonSubmit = document.getElementById('grid-floats__submit');
buttonSubmit.addEventListener('click', function() {
	gridSystemFloats.clearGridSystem();
	gridSystemFloats.getGrid();
});

