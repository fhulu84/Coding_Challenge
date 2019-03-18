const cleanRoom = (items) => {

	const organized = [];

	items.sort((a, b) => a > b ? 1 : -1); //sort items asc

	if(!stringsExist(items)) { //NUMBERS ONLY
		
		const numbers = []; //visited numbers

		for(item of items) {
			if(numbers.indexOf(item) > -1) {
				continue; //jump to next if this one already visited
			}
			//collect all of this item
			const collected = items.filter(num => num === item);

			if(collected.length > 1) { 
				organized.push(collected); //more than one
			} else { 
				organized.push(collected[0]); //just one item
			}
			numbers.push(item); //done with this item
		}

	} else {

		organized.push(items.filter(item => typeof item == 'number'));
		organized.push(items.filter(item => typeof item == 'string'));

	}

	return organized;

}

const stringsExist = (items) => {

	return items.filter(item => typeof item == 'string').length > 0;
}


// PRINT ARRAY in one line
const printArr = (arr) => {
	if(arr.length === 0) {
		return;
	}
	
	let result = "[";
	for(let i=0; i<arr.length; i++) {
		if(typeof arr[i] == 'object') {
			result += "[";
			for(let j=0; j<arr[i].length; j++) {
				result += (typeof arr[i][j] == 'string' ? `"${arr[i][j]}"` : arr[i][j]);
				if(j !== arr[i].length - 1) {
					result += ",";
				}
			}
			result += "]";
		} else {
			result += arr[i];
		}

		if(i !== arr.length - 1) {
			result += ",";
		}
	}

	result += "]";

	console.log(result);
}

const items1 = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
const items2 = [1, "2", "3", 2];

printArr(cleanRoom(items1));
printArr(cleanRoom(items2));


