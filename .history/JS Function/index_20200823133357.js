//---------Simply calling a function 
/*
function abc(param){
	alert('----::'+param);
}

abc('pqr');
*/
//----------Function declaration 
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

//-----------------------------------IMPORTANCE OF THIS
//---------Importance of this Function JS 
function createEmployee(firstname,lastname){
    var emp = {};
    emp.FirstName = firstname;
    emp.LastName = lastname;

}
var emp = createEmployee('Jitu','Patil');
console.log('FIRST NAME::'+emp.FirstName);

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

