#! /usr/bin/env node

import inquirer from "inquirer";

class student {
    id: string;
    name: string;
    coursesEnrolled: string [];
    feesAmount: number;

    constructor(
        id: string, 
        name:string, 
        coursesEnrolled: string[], 
        feesAmount: number
    )
    {
        this.id = id
        this.name = name
        this.coursesEnrolled = coursesEnrolled
        this.feesAmount = feesAmount
    }
}

let baseId = 10000
let studentId : string = " ";
let continueEnrollment = true;

let students : student [] = []

do{
    let action = await inquirer.prompt({
        type: "list",
        name: "ans",
        message: "Please select an option:\n",
        choices: ["Enroll a Student", "Show Student Status"]
    })

    if(action.ans === "Enroll a Student"){
        let studentName = await inquirer.prompt({
            type: "input",
            name:"ans",
            message:"Please Enter Your Name:"
        })

        let trimmedStudentName =(studentName.ans).trim().toLowerCase()
        let studentNameCheck = students.map(i => i.name)
          
    if(studentNameCheck.includes(trimmedStudentName) === false){
        if(trimmedStudentName !== ""){
            baseId ++
            studentId = "STID" + baseId

            console.log ("\n\tYour accout has been created");
            console.log (`Welcome, ${trimmedStudentName}!\n`);


        let cource = await inquirer.prompt({
                type: "list",
                name: "ans",
                message: "Please select a cource",
                choices: ["Atrifical Intelligence", "English", "Web Development"]
            })

            let courceFees = 0;
            switch(cource.ans){
                case "Atrifical Intelligence":
                    courceFees = 2000;
                    break;

                    case "English":
                    courceFees = 3000;
                    break;

                    case "Web Development":
                    courceFees = 5000;
                    break;
            }

            let courceConfirm = await inquirer.prompt({
                type: "confirm",
                name: "ans",
                message: "Do you want to enroll in this course"
            })
          
            
        if (courceConfirm.ans === true){
                let Student = new student(
                    studentId, 
                    trimmedStudentName,
                    [cource.ans],
                    courceFees)

                students.push(Student)
            console.log("You have enrolled in this course");
        }
    
        }else{
            console.log("invalid name");
        }

    }else{
        console.log("This name is already exsits");
    }
    
}
else if (action.ans === "Show Student Status"){
    
        if (students.length !== 0 ){
                let studentNamescheck = students.map(e => e.name)

                let selectedStudent = await inquirer.prompt({
                    type: "list",
                    name: "ans",
                    message: "please select name",
                    choices: studentNamescheck          
            })

                let foundStudent = students.find(Student => 
            
                Student.name === selectedStudent.ans)
                
                    console.log("Student information");
                    console.log (foundStudent);
                    console.log("\n");
    }else{
            console.log ("Record is empty");
        }
    }

        let userConfirm = await inquirer.prompt({
            type: "confirm",
            name: "ans",
            message: "Do you want to continue?"
        })

        if (userConfirm.ans === false){
            continueEnrollment = false
            
    }
}while(true)