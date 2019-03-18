/*
	Wrong inputs are ignored
	Expected inputs:
	HEX: #0000FF
	RGB: rgb(0, 0, 255) 
*/

// Convert color formats 
const convertColorFormat = (color) => {
	if(color.startsWith('#')) { // HEX to RGB
		return hexToRgb(color);
	} else if(color.startsWith('rgb')) { // RGB to HEX
		return rgbToHex(color);
	} else {
		console.log('Ooops! Something is wrong here...');
	}
}

const hexToRgb = (hexColor) => {
	const hex = hexColor.replace('#',''); 
	return 'rgb('+
			`${parseInt(hex.substring(0, 2), 16)},`+
			`${parseInt(hex.substring(2, 4), 16)},`+
			`${parseInt(hex.substring(4, 6), 16)}`+
			')';
}

//convert rgb color to hex
const rgbToHex = (rgbColor) => {
	const rgb = rgbColor.split(',').map(item => {
		return parseInt(item.trim().replace('rgb(','').replace(')',''));
	});

	return '#' +
			`${decimalToHex(rgb[0])}` + 
			`${decimalToHex(rgb[1])}` +
			`${decimalToHex(rgb[2])}`;
}

// decimal to Hex(2 digits)
const decimalToHex = (value) => {
	const hex = (value).toString(16);
	return hex.length == 1 ? '0' + hex : hex; 
} 

let hexCode = "#0000FF";
let rgbCode = "rgb(0, 0, 255)";

console.log(hexToRgb(hexCode));
console.log(rgbToHex(rgbCode));

console.log(convertColorFormat(hexCode));
