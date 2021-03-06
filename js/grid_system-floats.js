var gridSystemFloats = {};

(function() {
	

	this.clearGridSystem = function() {
		let labelInfo = document.getElementById('grid-floats__info');
		let gridShow = document.getElementById('grid-floats__show');
		let gridShowCode = document.getElementById('grid-floats__code');
		labelInfo.classList.add('hidden');
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
			labelInfo.classList.remove('hidden');
			labelInfo.innerHTML = "You gave wrong data. They must be integers from 1 to 12 and their sum must be 12"
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
		let numberOfColumn = 1;

		for ( let element of dataGrid  ) {
			gridColumns = gridColumns + '    <div class="column-' + element.toString() + '">' + '<span>' +numberOfColumn.toString() + '</span>' +  'Column ' + '</div>' + '\n';

			numberOfColumn+=1;
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
		
		let numberOfColumn = 1;

		for ( let element of dataGrid  ) {	
			gridColumns = gridColumns + '        &lt;div class="column-' + element.toString() + '"&gt;' +  numberOfColumn.toString() + ' column ' + '&lt;/div&gt;\n';
			numberOfColumn+=1;
		}
		gridCode.classList.remove('hidden');
		gridCode.innerHTML =  gridContainerStart + gridRowStart + gridColumns + gridEndRow + gridEnd;
	} //showGridCode()
}).apply(gridSystemFloats);


window.addEventListener( 'DOMContentLoaded', () =>{

	let gridFloatsButtonSubmit = document.getElementById('grid-floats__submit');
	let gridFloatsInputText = document.getElementById('grid-floats__input');

	if ( gridFloatsInputText ) {
		gridFloatsInputText.addEventListener('keyup', function(event) {
		
			if (event.keyCode === 13) {
				event.preventDefault();
				gridFloatsButtonSubmit.click();
			}
			
		});
	}
	if ( gridFloatsButtonSubmit ) {
		gridFloatsButtonSubmit.addEventListener('click', function() {
			event.preventDefault();
			gridSystemFloats.clearGridSystem();
			gridSystemFloats.getGrid();
		});
	}
	
} ); //DOMContentLoaded
