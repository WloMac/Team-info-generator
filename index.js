const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

let {name, id, email, } = await inquirer
.prompt([
    //Manager how to specify is manager?
    {
        type: 'input',
        name: 'name',
        message: "What is your Name?",
        default(){
            return 'Your name';
        }
      },
      {
        type: 'input',
        name: 'id',
        message: "What is your Employee ID?",
        default(){
            return 'Your EID';
        }
      },
      {
        type: 'input',
        name: 'email',
        message: "What is your e-mail?",
        default(){
            return 'Youremail@somewhere.com';
        }
      },
      {
        type: 'list',
        name: 'size',
        message: 'What size do you need?',
        choices: ['Add an engineer', 'Ad an intern', 'Finish building the team'],
        filter(val) {
          return val.toLowerCase();
        },
      },



])





let developmentTeamContent = `



`

fs.writeFile("index.html", developmentTeamContent);