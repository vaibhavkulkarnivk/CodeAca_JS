//---------Simply calling a function 
/*
function abc(param){
	alert('----::'+param);
}

abc('pqr');
*/
//----------Function declaration and function expression diff 
/*
//Function declaration
function foo(){
    console.log("Hello from foo");
}

//Calling
foo();
*/


//----------Function expression -> It is anonymous function which is assigned to variable so need to have function name- foo
/*
var f = function(){
    console.log("Hello from foo anonymous function");
}; //Semicolon at end

f();
*/

//Move normal function to arrow function
//steps :: Remove Function keyword, remove function name, add arrow after parameter 
var f = ()=>{
    console.log("Hello from foo anonymous function using arrow function");
}; //Semicolon at end

f();

//-----------------------------------IMPORTANCE OF THIS --- STARTS ---------------
//NORMAL way of function
/*
function createEmployee(firstname,lastname){
    var emp = {};
    emp.FirstName = firstname;
    emp.LastName = lastname;
    return emp;
}
var emp = createEmployee('Jitu','Patil');
console.log('FIRST NAME::'+emp.FirstName);
console.log('FIRST NAME::'+emp.LastName);
*/
//Using this - for constructing object js gives alternative of replacing creating(first) and returning(last) line and use 'new' keyword
//call function using new, in other langauges it is class name after new but in JS its function
function createEmployeeTHIS(firstname,lastname){
    //var emp = {}; //JS internally does -- var this = {};
    this.FirstName = firstname;
    this.LastName = lastname;
    //return emp; //JS internally does -- return this;
}
var emp = new createEmployeeTHIS('Jitu','Patil'); //new
console.log(emp);
console.log('FIRST NAME::'+emp.FirstName);
console.log('FIRST NAME::'+emp.LastName);

//-----------------------------------IMPORTANCE OF THIS --- ENDS ---------------


//----------Calling function in sequence
//Seperate functions
/*
function gotData(data){
    console.log('First level:'+data);
}
function gotDataData(data2){
    console.log('Second level:'+data2);
}
gotData('pqr',gotDataData('abc'));
*/

