//---------Simply calling a function 
/*
function abc(param){
	alert('----::'+param);
}

abc('pqr');
*/
//----------Function declaration and Function expression
function foo(){
    console.log("Hello from foo");
}

//Calling
foo();
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
*/

