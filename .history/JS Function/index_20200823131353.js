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

/*
//----------Function expression -> It is anonymous function which is assigned to variable
var f = function(){
    console.log("Hello from foo anonymous function");
}

f();
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
gotData('pqr',gotDataData('abc'));
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
a();


