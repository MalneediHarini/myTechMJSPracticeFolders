//var date= new Date();
//document.write(date);

//var cd= new Date(1998,03,08,4);
 //document.write(cd);

//set timeout -time delays
 //setTimeout(function(){
   //     document.write('Hello !Welcome to Sessions')
     //}, 3000);


     //Eg:1 setTimeout Time delay:
     //setTimeout(function(){
     //var date = new Date().toLocaleTimeString();
     //var x =  document.getElementById('demo');
     //x.innerHTML = date;
     //},5000);

     //Note: //innerHTML : it mainly helps in overriding the blocks. {}




    //Eg: 2 
    //setTimeout(function(){
     //console.log('HELLO PEOPLE!!! ');
    //},4000);


//set interval-time delay function

    setInterval(function(){
    var date = new Date().toLocaleTimeString();
    var x=  document.getElementById('demo');
    x.innerHTML=date;
 
   },10);


   //date object methods
  var todaysdate = new  Date();
  document.write('todays date is', todaysdate);

  console.log('day',todaysdate.getDay());
 console.log('year',todaysdate.getFullYear());
 console.log('date',todaysdate.getDate());
 console.log('hours',todaysdate.getHours())



