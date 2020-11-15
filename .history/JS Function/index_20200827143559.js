/*
    Everything in JS is object
    There is no class concept in JS, so function can be normal function or function expression i.e. property of object
    function are two types function declaration and function expression
    Object using new can be created of function(it behaves like a class in other programming). First letter of Constructor function is Capital and can be called using new
    In function declaration, do not define data type it takes automatically as var
    4 ways of calling function
        1.Direct call using functionName(); => function declaration
        2.using new FuncionName();
        3.declaration on object propery and assign anonymous function to it => function expression
        4.Associating one obj reference to another object reference using => oneObj.functio.call(anotherObject);
*/
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


//----------Function expression(also called as Anonymous function) -> It is anonymous function which is assigned to variable so need to have function name- foo
//IMP NOTE : function declaration is assinged to variable not call
/*
var f = function(){
    console.log("Hello from foo anonymous function");
}; //Semicolon at end like variable declaration, IMP NOTE ::here function is NOT evaluate and return type is not assigned to variable

f();
*/

// -------------IMP Pass function as argument as another function STARTS ----------------
//Without param
/*
var f = function(){
    console.log("Hello");
}

//another function which accepts function as argument
var executor = function(fn){
    //execute a passed function
    fn();
}

executor(f); //pass one function as parameter to another function
*/

//With param
/*
var f = function(name){
    console.log("Hello ::"+name);
}

//another function which accepts function as argument
var executor = function(fn, namepassed){
    //execute a passed function with param
    fn(namepassed);
}

executor(f,"Vaibhav"); //pass one function as parameter to another function
*/


// -------------IMP Pass function as argument as another function ENDS  ----------------

//Function as property of object
/*
var myObj = {
    name : "This is name property"
};
myObj.myMethod = function(){
    console.log("Function as a property");
}
myObj.myMethod();
*/

//Move normal function to arrow function
//steps :: Remove Function keyword, remove function name, add arrow after parameter 
/*
var f = ()=>{
    console.log("Hello from foo anonymous function using arrow function");
}; //Semicolon at end

f();
*/
//-----------------------------------4 Different ways to call functions --- STARTS ---------------
//1. NORMAL way of function
/*
function createEmployee(firstname,lastname){
    var emp = {};
    emp.FirstName = firstname;
    emp.LastName = lastname;
    console.log(this);//here this is global object => window
    return emp;
}
//Calling
var emp = createEmployee('Jitu','Patil');
console.log('FIRST NAME::'+emp.FirstName);
console.log('FIRST NAME::'+emp.LastName);
*/

//2. Using Constructor - for constructing object js gives alternative of replacing creating(first) and returning(last) line in above function
//and use 'new' keyword while calling
//call function using new, in other langauges it is class name after new but in JS its function
/*
function CreateEmployeeTHIS(firstname,lastname){ //to give hint to other programmer that this is constructor function so first letter capital
    //var emp = {}; //JS internally does -- var this = {};
    this.FirstName = firstname;
    this.LastName = lastname;
    console.log(this); //here this is empty object created by JS
    //return emp; //JS internally does -- return this;
}
//calling
var emp = new CreateEmployeeTHIS('Jitu','Patil'); //differentiate between constructor and function, with first letter as capital
console.log(emp);
console.log('FIRST NAME::'+emp.FirstName);
console.log('FIRST NAME::'+emp.LastName);
*/

//3. Function as a Property of object, it will be accessible by calling function on object instance
/*
var obj = {"prop":"this is object itself"};
obj.createEmployee = function(firstname,lastname){
    obj.FirstName = firstname;
    obj.LastName = lastname;
    console.log("Function as a propetry");
    console.log(this); //here this refers to object which is calling function
}

obj.createEmployee('Jitu','Patil');
*/
//-----------------------------------4 Different ways to call functions --- ENDS ---------------

//3.1 function within function accessing via object, properties in function and calling it using new
/*
function CreateEmployee(firstname,lastname,salary){
    this.FirstName = firstname;
    this.LastName = lastname;
    this.Salary = salary;
    this.increaseSalary = function(){
        this.Salary += 100;
    }
}
var emp = new CreateEmployee('Jitu','Patil',500);
console.log('Before increase ::');
console.log(emp);
emp.increaseSalary();
console.log('After increase ::');
console.log(emp);

*/
//---------------------- 4th way to call function START here -------------------
//Associating one object with another object and passing a reference of another object using 'call'
/*
function CreateEmployee(firstname,lastname,salary){
    this.FirstName = firstname;
    this.LastName = lastname;
    this.Salary = salary;
    this.increaseSalary = function(){
        this.Salary += 100;
    }
}
var emp = new CreateEmployee('Jitu','Patil',500);
console.log('Before increase ::');
console.log(emp);
//emp.increaseSalary();
//console.log('After increase ::'+emp);

function AssociateHR(name){
    this.Name = name;
}

var sadhiya = new AssociateHR("sadhiya");
sadhiya.increaseSalary = emp.increaseSalary; //here increaseSalary is attribure or variable so calling is not like function call ();
sadhiya.increaseSalary.call(emp); //calling one object to other object's expression function and call it by passing other object reference using 'call' 
console.log('after increase ::');
console.log(emp);
*/
//---------------------- 4th way to call function END here -------------------

//PROTOTYPE IN JS 
//---------------------- After creating function, JS creates 2 objects one for Function and other for Prototype(it is parent of function object). If we create objects
//by calling function as "new FunctionName();" e.g. emp object refers to Prototype object with __proto__ propery from emp object
/*
function CreateEmp(name){
    this.name = name;
}

var emp = new CreateEmp("Jitu");
console.log(emp);

CreateEmp.prototype.test = "This is on parent prototype";
console.log(emp.test);
//Result of below if we type in console is true
CreateEmp.prototype === emp.__proto__;
*/


//Exercise 
/*
var person = {
    "firstname":"Vaibhav",
    "lastname":"Kulkarni",
    "address":{
        "street":"West 21",
        "state":"CA"
    },
    "isStateCA":function(stateParam){
        if(this.address.state === stateParam){
            return true;
        }
        else{
            return false;
        }
    }
}

var isStateCAVar = person.isStateCA("CA");
console.log(isStateCAVar);
var isStateCAVar2 = person.isStateCA("ABC");
console.log(isStateCAVar2);
*/

//Arguments 
//Normal addition
/*
var add = function(a,b){
    console.log(arguments); //every passed value will go in arguments
    return a + b;
}
console.log(add(2,3));
*/

//Dynamic addition
var add = function(){ //as we are using implicite arguments so need of params here 
    var i,sum=0;
    for(i=0 ; i< arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
console.log(add(2,3,4));

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

