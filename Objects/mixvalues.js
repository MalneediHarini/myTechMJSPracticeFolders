var arr = [
    "Bootstrap",
    true,
    123,
    { name: "rani", age: 23 },
    
    function() {
      alert("Hi im function inside object");
    }
  ];
  
  
  //calling the object values
  console.log(arr[3].name);
  
  //to call the functions(calling the anonmyous function)
  arr[4]();