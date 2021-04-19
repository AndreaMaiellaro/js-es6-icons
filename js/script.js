const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

const colors = [
    'blue',
    'orange',
    'purple'
];

// TEMPLATE ICONE 
/* 
<div class="icon">
    <i class="fas fa-cat"></i>
    <div>nome icona</div>
</div> 
*/

// Milestone 1
// Partendo dalla seguente struttura dati , 
// mostriamo in pagina tutte le icone disponibili come da layout.



// Milestone 2
// Coloriamo le icone per tipo

// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone

const iconsContainer = $('#icons-container')
const colorArray = colorIcons(icons, colors);
printIcone(colorArray, iconsContainer);

//funzioni

//popolare container con icone
function printIcone(iconsArray, container) {
	console.log(iconsArray);

	iconsArray.forEach((element) => {

		//destuct element
		const {name, prefix, family, color} = element;

		const iconElement = `
		<div class="icon">
    		<i class="${family} ${prefix}${name}" style="color: ${color};"></i>
    		<div>${name.toUpperCase()}</div>
		</div
		`;

		container.append(iconElement);
	});

}

// funzione per dare alle icone i colori

function colorIcons(colorArray, iconeArrayOriginale) {
	const iconTypes = getIconsTypes();
	console.log(iconTypes);

	//map
	const iconsWithColors = iconeArrayOriginale.map((element) => {
		const newIconObj = {
			// name: element.name,
			// prefix: element.prefix,
			// type: element.type,
			// family: element.family,
			...element
		};

		const iconTypeIndex = iconTypes.indexOf(newIconObj.type);
		// console.log(newIconObj.type + ',' + iconTypeIndex);

		if (iconTypeIndex != -1) {
			newIconObj.color = colorArray[iconTypeIndex];
		}

		return newIconObj;
	});

	return iconsWithColors;
}


// array con tipi icone
function getIconsTypes(iconsArray) {
	const typesArray = [];

	iconsArray.forEach((element) => {
		const elementType = element.type;

		if( !typesArray.includes(elementType) ) {
			typesArray.push(elementType);
		}
	});

	return typesArray;
}