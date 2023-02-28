const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs/promises");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

let team = [];
// Manager's detail
let managerDetails = [
  {
    type: 'input',
    name: 'name',
    message: "Please provide Team Manager name",
    default(){
        return 'NoName';
    }
  },
  {
    type: 'input',
    name: 'id',
    message: "Please provide your ID",
    default(){
        return 'NoID';
    }
  },
  {
    type: 'input',
    name: 'email',
    message: "Please provide your email",
    default(){
        return 'NoEmail';
    }
  },
  {
    type: 'input',
    name: 'officeNumber',
    message: "Please provide your Office Number",
    default(){
        return 'NoNum';
    }
  },

]
// Engineer's detail

let engineerDetails = [{
  type: 'input',
  name: 'name',
  message: "Please provide engineer name",
  default(){
      return 'NoName';
  }
},
{
  type: 'input',
  name: 'id',
  message: "Please provide ID",
  default(){
      return 'NoID';
  }
},
{
  type: 'input',
  name: 'email',
  message: "Please provide email",
  default(){
      return 'NoEmail';
  }
},
{
  type: 'input',
  name: 'github',
  message: "Please provide Github username",
  default(){
      return 'NoNum';
  }
}]
let employeeDetails = [{
  type: 'input',
  name: 'name',
  message: "Please provide employee name",
  default(){
      return 'NoName';
  }
},
{
  type: 'input',
  name: 'id',
  message: "Please provide ID",
  default(){
      return 'NoID';
  }
},
{
  type: 'input',
  name: 'email',
  message: "Please provide email",
  default(){
      return 'NoEmail';
  }
},
]
// Intern's detail
let internDetails = [
  {
    type: 'input',
    name: 'name',
    message: "Please provide intern's name",
    default(){
        return 'NoName';
    }
  },
  {
    type: 'input',
    name: 'id',
    message: "Please provide ID",
    default(){
        return 'NoID';
    }
  },
  {
    type: 'input',
    name: 'email',
    message: "Please provide email",
    default(){
        return 'NoEmail';
    }
  },
  {
    type: 'input',
    name: 'school',
    message: "Please provide school",
    default(){
        return 'NoNum';
    }
  }]

  let decision = [
    {
    type: 'list',
    name: 'typeOfMember',
    message: 'What you like to do? ',
    choices: ['1. Add an engineer', '2. Add an intern', '3. Finish building the team'],
    filter(val) {
      return val.charAt(0);
    }
  }]

teamGenerator()
async function teamGenerator() {  
    let {name, id, email, officeNumber, github, school } = await inquirer
    // // type of employee selection 
    // // if manager go to managerGenerator?
    // // if engineer go to engineerGenerator?
    // // if intern go to internGenerator? 
    // // managerGenerator(){ is prompts for manager as below?}
  
    .prompt(managerDetails);

    // adding a selection of action
    
       
       
    
    // await inquirer .prompt(engineerDetails);
    // validte choose and make apropriate prompt
    
      do{
      let typeOfMember = await inquirer     
      .prompt(decision);
      
        //(Object.values(typeOfMember) != 3 )
        console.log(Object.values(typeOfMember))
        if (Object.values(typeOfMember) == 1) {
          await inquirer .prompt(engineerDetails);
          
          //validate();
                  
          
        }else if (Object.values(typeOfMember) == 2){
          await inquirer .prompt(internDetails);
          //validate();
          
          
          
        }else{
        console.log("Thank you for using Team Generator");
        }
      }
    while(Object.values(typeOfMember) == 3)
      

      
     
     
      // validation
      // function validate(){
      //   const anotherMember = {
      //     type: 'confirm',
      //     name: 'AddMember',
      //     message: 'Do you like to add another member?',
      //     default: true,  
      //   }
      
      //   inquirer.prompt(anotherMember).then((answers) => {
      //     if(answers.AddMember === true){
           
      //     }
      //     else{
      //       console.log("Your team has been build");
      //       return;
      //     }
      //   })
      // }

 

  
  


  
  team.push(new Manager (name, id, email, officeNumber ));
  team.push(new Engineer (name, id, email, github ));
  team.push(new Intern (name, id, email, school ));

  let htmlDoc = render(team)

  await fs.writeFile(outputPath, htmlDoc);

  
}






