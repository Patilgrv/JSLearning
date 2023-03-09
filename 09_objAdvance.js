const employee = {
    id: 124567,
    name: "Elon Musk",
    country : "US",
    city: "Silicon Valley"
 }  

 console.log("==== in operator =====");
 const isIdAvailable = "id" in employee;
 console.log(isIdAvailable);


 // traversing in obj
 for (const key in employee) {
    if (Object.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
        console.log(key, element);
        
    }
 }
 const keysOFEmployee = Object.keys(employee);
 console.log(keysOFEmployee);

 
 const valuesOFEmployee = Object.values(employee);
 console.log(valuesOFEmployee);

 
 const entriesOFEmployee = Object.entries(employee);
 console.log(entriesOFEmployee);