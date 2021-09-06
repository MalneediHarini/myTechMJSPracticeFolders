//Anonomyous function
 //function ()
  //{
   //alert('im a no name function')
  //}

  //Anonomyous function  with Function expression
//var message = function () 
//{
  //document.write('Have a nice day!!!')
//}
//message();


//naming function
//function sample() 
 //{           
   // console.log("im a named function"); //called part
 //}
  
  //sample();   //calling part
  //sample();


  //function expression
  //var test = function()
   //{
     //document.write("Im a function expression!!! ");
   //};
    //test();


    // //immediate invoke function
   //(function () 
   //{
     //console.log("Hello!!I am a immediate invoke function!!");
   //})();





     //local variables
  //function showMessage() 
  //{
  //var message = 'Hello all Im A Local Variable';
  //alert(message);
  //}
  //showMessage();


   //global variables
  //var text = 'Harini';
 //function showMessage() {
  //var msg = "Hii " + text;
  //// alert(msg);
//}
 //alert(text);
//showMessage();


   // //function with parameters

  function sample(from, text) {
    document.write(from + ":" + text);
  }
  sample("Hello!Rani", "Welcome!");
  
  
  function checkAge(age) {
    if (age >= 18) {
      return true;
    } else {
      return confirm('Do you have permission from your parents?');
    }
  }
  
  var age = prompt('How old are you?', 18);
  if (checkAge(age)) {
    alert('Access granted');
  } else {
    alert('Access denied');
  }


  //function with parameters
  function Add(n1,n2){
  console.log('the sum is',n1 + n2);
   }
  Add(100.1,200);
  
  