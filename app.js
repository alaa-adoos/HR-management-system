const employess={
employee0 :{
    "Full Name":"Ghazi Samer",
    salary:1728,
    Department:"Administration",
    Level:"Senior",
    "Image URL":[]
    },
    employee1 :{
        "Full Name":"Lana Ali",
        salary:1809,
        Department:"Finance",
        Level:"Senior",
        "Image URL":[]
        },
        employee2 :{
            "Full Name":"Tamara Ayoub",
            salary:1589,
            Department:"Marketing",
            Level:"Senior",
            "Image URL":[]
            },
            employee3 :{
                "Full Name":"Safi Walid",
                salary:1178,
                Department:"Administration",
                Level:"Mid-Senior",
                "Image URL":[]
                },
                employee4 :{
                    "Full Name":"Omar Zaid",
                    salary:480,
                    Department:"Development",
                    Level:"Senior",
                    "Image URL":[]
                    },
                    employee5 :{
                        "Full Name":"Rana Saleh",
                        salary:1121,
                        Department:"Development",
                        Level:"Junior",
                        "Image URL":[]
                        },
                        employee6 :{
                            "Full Name":"Hadi Ahmad",
                            salary:1250,
                            Department:"Finance",
                            Level:"Mid-Senior",
                            "Image URL":[]
                         
                        },

                        uniqueId:function(){
                            this.employee0.ID=1000;
                            this.employee1.ID=1001;
                            this.employee2.ID=1002;
                            this.employee3.ID=1003;
                            this.employee4.ID=1004;
                            this.employee5.ID=1005;
                            this.employee6.ID=1006;
                        },
                        calcSalary:function(){
                            function getRndInteger(min,max){
                         this.salary=Math.floor(Math.random()*(max-min))+min;
                        
                         
               
                            }
                  
                  
                        }
                        
                        }
                        employess.calcSalary();
employess.uniqueId();


for(const i in employess){
    console.log("Employee name :",employess[i]["Full Name"]);
    console.log("Employee salary:",employess[i]["salary"]);
    console.log("\n");
}


