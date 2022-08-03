var ID=999;
const employee0 ={
    employeeId:++ID,
    "Full Name":"Ghazi Samer",
    salary:1728,
    Department:"Administration",
    Level:"Senior",
    "Image URL":[],
    salary:0,
uniqueId:function(){
    return this.employeeId;
},
gitRandomSenior:function(){
    let salary=Math.floor(Math.random()*(2000-1500)+1500);
    let netSalary=salary-(salary*0.075);
    console.log("Employee salary : "+salary );
   // console.log("the netTax is "+netSalary);
}
    }
  const   employee1={
    employeeId:++ID,
        "Full Name":"Lana Ali",
        salary:1809,
        Department:"Finance",
        Level:"Senior",
        "Image URL":[],
        salary:0,
        uniqueId:function(){
            return this.employeeId;
        },
        gitRandomSenior:function(){
            let salary=Math.floor(Math.random()*(2000-1500)+1500);
            let netSalary=salary-(salary*0.075);
            console.log("Employee salary : "+salary );
           // console.log("the netTax is "+netSalary);
        }
        }

       const  employee2 ={
        employeeId:++ID,
            "Full Name":"Tamara Ayoub",
            salary:1589,
            Department:"Marketing",
            Level:"Senior",
            "Image URL":[],
            salary:0,
            uniqueId:function(){
                return this.employeeId;
            },
            gitRandomSenior:function(){
                let salary=Math.floor(Math.random()*(2000-1500)+1500);
                let netSalary=salary-(salary*0.075);
                console.log("Employee salary : "+salary );
               // console.log("the netTax is "+netSalary);
            }
            }

           const  employee3={
            employeeId:++ID,
                "Full Name":"Safi Walid",
                salary:1178,
                Department:"Administration",
                Level:"Mid-Senior",
                "Image URL":[],
                salary:0,
                uniqueId:function(){
                    return this.employeeId;
                },
                gitRandomMidSenior:function(){
                    let salary=Math.floor(Math.random()*(1500-1000)+1000);
                    let netSalary=salary-(salary*0.075);
                    console.log("Employee salary : "+salary );
                   // console.log("the netTax is "+netSalary);
                }
                }

               const employee4={
                employeeId:++ID,
                    "Full Name":"Omar Zaid",
                    salary:480,
                    Department:"Development",
                    Level:"Senior",
                    "Image URL":[],
                    salary:0,
                    uniqueId:function(){
                        return this.employeeId;
                    },
                    gitRandomSenior:function(){
                        let salary=Math.floor(Math.random()*(2000-1500)+1500);
                        let netSalary=salary-(salary*0.075);
                        console.log("Employee salary : "+salary );
                       // console.log("the netTax is "+netSalary);
                    }
                    }

                  const  employee5={
                    employeeId:++ID,
                        "Full Name":"Rana Saleh",
                        salary:1121,
                        Department:"Development",
                        Level:"Junior",
                        "Image URL":[],
                        salary:0,
                        uniqueId:function(){
                            return this.employeeId;
                        },
                        gitRandomJunior:function(){
                            let salary=Math.floor(Math.random()*(1000-500)+500);
                            let netSalary=salary-(salary*0.075);
                            console.log("Employee salary : "+salary );
                           // console.log("the netTax is "+netSalary);
                        }
                        }

                       const employee6={
                        employeeId:++ID,
                            "Full Name":"Hadi Ahmad",
                            salary:1250,
                            Department:"Finance",
                            Level:"Mid-Senior",
                            "Image URL":[],
                            salary:0,
                            uniqueId:function(){
                                return this.employeeId;
                            },
                            gitRandomMidSenior:function(){
                                let salary=Math.floor(Math.random()*(1500-1000)+1000);
                                let netSalary=salary-(salary*0.075);
                                console.log("Employee salary : "+salary );
                               // console.log("the netTax is "+netSalary);
                            }
                         
                        }

                        
console.log("Employee name :"+employee0["Full Name"]);
employee0.gitRandomSenior();
console.log("\n");
console.log("Employee name :"+employee1["Full Name"]);
employee1.gitRandomSenior();
console.log("\n");
console.log("Employee name :"+employee2["Full Name"]);
employee2.gitRandomSenior();
console.log("\n");
console.log("Employee name :"+employee3["Full Name"]);
employee3.gitRandomMidSenior();
console.log("\n");
console.log("Employee name :"+employee4["Full Name"]);
employee4.gitRandomSenior();
console.log("\n");
console.log("Employee name :"+employee5["Full Name"]);
employee5.gitRandomJunior();
console.log("\n");
console.log("Employee name :"+employee6["Full Name"]);
employee6.gitRandomMidSenior();
