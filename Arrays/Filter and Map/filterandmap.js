//filter method

 var numbers = [100,200,300,400,500,600];

var afterfilter = numbers.filter(function(value,index){
     if(value >= 300){
         return true;
     }
     else {
         return false;
     }
  })

  console.log('Before filter',numbers);//100 200 300 400 500 600
  console.log('After filter',afterfilter); //300 400 500 600



  //using arrow function (single line)
 //js engine adds the return statement

  //var valueafterFilter = numbers.filter(val => val>=300);
  //console.log(valueafterFilter);



  // //MAP

var numbers = [50,100,150,200,250];
var mappednums = numbers.map(function(val,index){
val = val + 50;
return val;
})
console.log("before mapping",numbers); //50 100 150 200 250
console.log("After mapping",mappednums);//100 150 200 250 300







// console.log("===================");



// //map using arrow functions
// var maparrow=numbers.map(val => val+50);
// console.log(maparrow);



