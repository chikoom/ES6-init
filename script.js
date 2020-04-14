

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



// SET Exmaple
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



// MAP Exmaple
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



var cats = ["Tabby", "Siamese", "Persian"];
var dogs = ["Golden Retriever", "Pug", "Schnauzer"];

var animals = ["Whale", "Giraffe", ...cats, "Snake", ...dogs, "Coyote"];

console.log(animals);


// For-Of Exmaple
for (let letter of 'JavaScript') {
			console.log(letter);
}

var topics = ['JavaScript', 'Node', 'React'];

for (let topic of topics) {
	console.log(topic);
}

var topics = new Map();
topics.set('HTML', '/class/html');
topics.set('CSS', '/class/css');
topics.set('JavaScript', '/class/javascript');
topics.set('Node', '/class/node');

for (let topic of topics.keys()) {
	console.log(topic, "is the course name");
}

for (let topic of topics.values()) {
	console.log("The course description can be found at", topic);
}

for (let course of topics.entries()) {
	console.log(course);
}


function addNumbers(x=0, y=0){
	console.log(x+y);
}

addNumbers();
addNumbers(2,3);


// Objects Literals 0 base Array

var cat = {
	speak: function(times, sound){
		console.log(Array(times+1).join(sound));
	},
	purr: function(times){
		console.log(Array(times+1).join("PURR "));
	}

};

cat.speak(3,"meow");
cat.purr(5);

// Objects Literals ES6

var dog = {
	speak(times, sound){
		console.log(sound.repeat(times));
	},
	woof(times){
		console.log("woof".repeat(times));
	}

};

dog.speak(3,"bark");
dog.woof(5);

// Arrow functions

var studentList = students => console.log(students);
studentList(["Idan", "Zohar", "Kundi"]);

var studentListNumber = (school, students) => console.log(`the students ${students} are in ${school} school`);
studentListNumber("borochov", ["Idan", "Zohar", "Kundi"]);


// Arrow and this scope

var kundi = {
	name:"Kundofon",
	actions:["Eat", "Sleep", "Jump"],
	printActions: function(){
		this.actions.forEach(function(action){
			var str = this.name+" likes to "+action;
			console.log(str);
		}.bind(this));
	}
};

kundi.printActions();

// ES6 version

var kundofon = {
	name:"Kundofoni",
	sounds:["Meow", "Purr", "Grr"],
	printSounds(){
		this.sounds.forEach(sound => {
			var str = this.name+" likes to "+sound;
			console.log(str);
		});
	}
};

kundofon.printSounds();



// Destructuring

var [first,,,foutrh] = ["Tel Aviv", "Ramat gan", "Givataim", "Nahariya", "Haifa"];
console.log(first,foutrh);

// Destructuring 2

var vecation = {
	destination: "Amsterdam",
	days: 2,
	activity: "walking",
	price: 5000
}

function vecationMarketing({destination, days}) {
	return `Come to ${destination} for ${days} days!`;
}

console.log(vecationMarketing(vecation));

// Generators
function* director() {
	yield "Three";
	yield "Two";
	yield "One";
	yield "Action!";
}
var action = director();
console.log(action.next().value);
console.log(action.next().value);
console.log(action.next().value);
console.log(action.next().value);
console.log(action.next());


// Generator Timer
function* eachItem(arr){
	for(i=0; i < arr.length; i++){
		yield arr[i];
	}
}

var letters = eachItem(["a", "b", "c"]);

var abc = setInterval(function(){
	var letter = letters.next();
	if(letter.done){
		clearInterval(abc);
		console.log("letters are done");
	}
	else
	{
		console.log(letter.value);
	}
},1000)