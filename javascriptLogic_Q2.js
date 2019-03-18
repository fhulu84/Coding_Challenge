
const getSumPairs = (numbers, target) => {
	const usedNumbers = [];
	const pairs = [];

	for(let i=0; i < numbers.length; i++) {

		if(usedNumbers.indexOf(numbers[i]) >= 0) { //if the number is already used
			continue;
		}

		let wanted = target - numbers[i]; // the number wanted to reach the target

		if(numbers.indexOf(wanted) > i) { // search in the rest of the list

			pairs.push([numbers[i], wanted]); //add new pair to the list
			usedNumbers.push(wanted); 
		}

		usedNumbers.push(numbers[i]);
	}

	if(pairs.length == 1) {
		return pairs[0];
	} else {
		return pairs;
	}

}


const numbers = [1, 2, 3, 3, 1, 0, 5, 7, 4, 9];
const target = 5;

getSumPairs(numbers, target);// [[1, 4], [2, 3], [0, 5]]

