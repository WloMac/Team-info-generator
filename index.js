const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
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
    message: "Please provide manager name",
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

teamGenerator()
async function teamGenerator() {  
    let {name, id, email, officeNumber, github, school } = await inquirer
    // type of employee selection 
    // if manager go to managerGenerator?
    // if engineer go to engineerGenerator?
    // if intern go to internGenerator? 

    // managerGenerator(){ is prompts for manager as below?}
  
    .prompt(managerDetails);

    // then?
    await inquirer    
    .prompt(engineerDetails);
  

 

  
  


  
  team.push(new Manager (name, id, email, officeNumber ));
  team.push(new Engineer (name, id, email, github ));
  // team.push(new Intern (name, id, email, school ));

  let htmlDoc = render(team)

  await fs.writeFile(outputPath, htmlDoc);

  
}





//ask for other members of team

