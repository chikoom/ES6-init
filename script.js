

// Default veriables in functions + template strings - new to ES6
var nameBuilder = function(firstName="Joe", lastName="Doe") {
			console.log(`${firstName} ${lastName}`);
		};

nameBuilder();

// const is a constant veriable new in ES6
const numberOfDivs = 18;

// let is a scope veriable new in ES6
for (let i = 0; i <= numberOfDivs; i++) 
{
	var divi = document.createElement('div');
	divi.innerHTML = i;

	divi.addEventListener('click', function(e) {
	 alert("box number "+i);
	}, false);

	document.getElementsByTagName('section')[0].appendChild(divi);
}


function templateStringExample(name="No name entered", value=0)
{
	let addedValue = 50;
	let stringOutput = `
		The name entered is: ${name}\n
		The value entered is: ${value}\n
		The added value is: ${addedValue}\n
		The total value is: ${value+addedValue}\n
	`;

	var textP = document.createElement('p');
	textP.innerHTML = stringOutput;

	
	document.getElementById('templateString').appendChild(textP);

}

templateStringExample("Chikoom", 100);



var books = new Set();
books.add('Pride and Prejudice');
books.add('War and Peace')
	 .add('Oliver Twist');

console.log(books);
console.log('how many books?', books.size);
console.log('has Oliver Twist?', books.has('Oliver Twist'));
books.delete('Oliver Twist');
console.log('has Oliver Twist still?', books.has('Oliver Twist'));



var data = [4,2,4,4,2,5,1,6,7,5,6,8,2,7];
var set = new Set(data);
console.log('data.length', data.length);
console.log('set.size', set.size);




var course = new Map();
		course.set('react', {description: 'ui'});
		course.set('jest', {description: 'testing'});

		console.log(course);
		console.log(course.react);
		console.log(course.get('react'));

		var details = new Map([
			[new Date(), 'today'],
			['items', [1, 2]]
		]);

		console.log(details.size);

		details.forEach(function(item) {
			console.log(item);
		});