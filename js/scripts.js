// scripts.js

var table_female = ['Ala', 'Ela', 'Ola', 'Ula'],
	table_male = ['Alek', 'Olek', 'Adam', 'Igor'],
	table_names = table_female.concat(table_male),
	addNewName = prompt('Enter new name:');
	checkIfPresent = table_names.indexOf(addNewName);

console.log(table_names);

	if (checkIfPresent != -1) {
		console.log('Name: ' + addNewName + ' already exists in the array.')
	} else {
		table_names.splice(0, 0, addNewName);
		//table_names.push(addNewName)
		console.log('Name: ' + addNewName + ' added to the array.')
		console.log(table_names);
	}

/*
var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];
var allNames = femaleNames.concat(maleNames);
var newName = 'Marian'; 

console.log(table_names);

	if (allNames.indexOf(newName) === -1) {
		table_names.push(addNewName)
	} else {
		console.log('Marian siedzi w tablicy.')
	}
*/