/*
    JS Datatypes:
    Primitives
    1. Number
    2. String
    3. Boolean
    4. undefined => value is not defined, e.g in form we keep fields as blanck
    5. null => like N/A. e.g in form something is not applicable so we write N/A instead of keeping it blanck
*/

/*
let name = 'Vaibhav';
let age = 18;
console.log(age);
*/

//undefined ex
/*
var a;
console.log(a); //here a is not defined to value of a is => undefined
//If we have null should be assinged then assign explicitely as null, it is like N/A
a = null;
console.log(a);
*/

//typeof gives data typeof variable or value
var a = 10;
console.log(typeof a);
a = true;
console.log(typeof a);
a = null
console.log(typeof a); //as object not null this is bug in JS
console.log(typeof 10);// typeof
/*
let person = {
    name : 'Vaibhav',
    age : 30
}

console.log('Person name:'+person.name);
console.log('Person Age:'+person['age']);
let keyName = 'name';
console.log('Person Name using dynamic :'+person[keyName]);
*/

/*
let selectedColor = ['red','blue'];
selectedColor[2] =1;
console.log(selectedColor);
console.log(selectedColor.length);
console.log(selectedColor[0]);  
*/

/*
function greet(name){
    console.log('Hello '+name)
}
greet('Vaibhav'); 
*/

/*
let arr = [1,2,3,4,5];
console.log(arr);
*/

//----------------------------- START ------------
const companies = [
    {name : 'Company one',category : 'Finance',start:1981,end : 1989},
    {name : 'Company two',category : 'Retail',start:1985,end : 1987},
    {name : 'Company three',category : 'Auto',start:1991,end : 2000},
    {name : 'Company four',category : 'Technology',start:1978,end : 2008}
];
/*
for(let i=0;i<companies.length;i++){
    console.log(companies[i]);
}
*/

/*
companies.forEach(function(company){
    console.log(company.name);
})
*/
//----------------------------- ENDS ---------------
//Iterating array has three ways
let ages = [22,55,44,77,9,6,55];
//METHOD 1 for ITERATION using for
/*
const canDrink = [];
for(let i=0;i<ages.length;i++){
    if(ages[i]>21){
        canDrink.push(ages[i]);
    }
}
console.log('METHOD FIRST');
console.log(canDrink);
*/

//METHOD 2 for ITERATION using function
/*
const canDrink = ages.filter(function(age){
    if(age >= 21){
        return true;
    }
});
console.log('METHOD SECOND');
console.log(canDrink);
*/

//METHOD 3 for ITERATION using ARROW function
/*
const canDrink = ages.filter(age => age >=21);
console.log('METHOD THREE');
console.log(canDrink);
*/

//Using company retail example with arrow function
/*
const retailCompanies = companies.filter(company => company.category === 'Retail');
console.log(retailCompanies);
*/

/*
const eighteesCompanies = companies.filter(company =>(company.start >= 1980 && company.end < 1990));
console.log(eighteesCompanies);
*/

//Map Examples 
/*
const companyNames = companies.map(function(company){
    return company.name;
});
console.log(companyNames);
*/

/*
const companyNames = companies.map(company =>company.name);
console.log(companyNames);
*/

/*
const ageSquareRoot = ages.map(age => Math.sqrt(age));
console.log(ageSquareRoot);

const agesIntoTwo = ages.map(age => age *2);
console.log(agesIntoTwo);
*/

//Combining both
/*
const ageMap = ages
    .map(age => Math.sqrt(age))
    .map(age => age *2);
console.log(ageMap);
*/

//Sort company by start year
/*
const sortCompanies = companies.sort((a,b) => (a.start > b.start ? 1 : -1));
console.log(sortCompanies);  
*/

//Sort ages
//Ascending
/*
const sortAges = ages.sort((a,b) => a-b);
console.log(sortAges);

//Descnding
const sortAgesDesc = ages.sort((a,b) => b-a);
console.log(sortAgesDesc);
*/


//reduce function
/*
const ageSum = ages.reduce((total,age)=> total + age, 0);
console.log(ageSum);
*/

/*
const totalAge = companies.reduce(function(total,company) {
    return total + (company.end - company.start)
},0);
console.log(totalAge); 
*/

/*
const totalAge = companies.reduce((total,company) => 
total + (company.end - company.start)
,0);
console.log('Using arrow fun::'+totalAge);  
*/

//---------Simply calling a function 
/*
function abc(param){
	alert('----::'+param);
}

abc('pqr');
*/

//----------Calling function in sequence
//Seperate functions
/*
function gotData(data){
    console.log('First level:'+data);
}
function gotDataData(data2){
    console.log('Second level:'+data2);
}
gotData('pqr',gotDataData('abc')); //inner functions executes first 
*/

//----------
data = 'abc';
data2 = 'pqr';
//Chanining using arrow function
var a = (data =>{
    console.log('First level:'+data);
    }   
    ,data2 => {
    console.log('Second level:'+data2);
    }
);

