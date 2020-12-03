const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const myTeam = [];

function makeEngineer() {
    inquirer
        .prompt([
            {
                type:'input',
                name:'name',
                message:'Enter the name of your engineer:'
            },
            {
                type:'input',
                name:'id',
                message:'Enter the ID number of your engineer:'
            },
            {
                type:'input',
                name:'email',
                message:'Enter the email of your engineer:'
            },
            {
                type:'input',
                name:'github',
                message:'Enter the github username of your engineer:'
            },
            {
                type:'list',
                name:'next',
                message:'Pick another employee class to generate, or exit the CLI.',
                choices:['Engineer', 'Intern', 'Manager', 'Exit']
            }
        ]).then(answers => {
            var newEng = new Engineer (answers.name, answers.id, answers.email, answers.github);
            myTeam.push(newEng);
            switch(answers.next) {
                case 'Engineer':
                    makeEngineer();
                    break;
                case 'Intern':
                    makeIntern();
                    break;
                case 'Manager':
                    makeManager();
                    break;
                case 'Exit':
                    console.log(myTeam);
                    render(myTeam);
            };

        }).catch(error=> {
            if(error.isTtyError) {
                console.log("prompt could not be rendered in the current environment");
            } else {
                console.log("something else went wrong");
            }
        });
};

function makeIntern() {
    inquirer
        .prompt([
            {
                type:'input',
                name:'name',
                message:'Enter the name of your intern:'
            },
            {
                type:'input',
                name:'id',
                message:'Enter the ID number of your intern:'
            },
            {
                type:'input',
                name:'email',
                message:'Enter the email of your intern:'
            },
            {
                type:'input',
                name:'school',
                message:'Enter the university your intern attends:'
            },
            {
                type:'list',
                name:'next',
                message:'Pick another employee class to generate, or exit the CLI.',
                choices:['Engineer', 'Intern', 'Manager', 'Exit']
            }
        ]).then(answers => {
            var newInt = new Intern (answers.name, answers.id, answers.email, answers.school);
            myTeam.push(newInt);
            switch(answers.next) {
                case 'Engineer':
                    makeEngineer();
                    break;
                case 'Intern':
                    makeIntern();
                    break;
                case 'Manager':
                    makeManager();
                    break;
                case 'Exit':
                    console.log(myTeam);
                    render(myTeam);
            };

        }).catch(error=> {
            if(error.isTtyError) {
                console.log("prompt could not be rendered in the current environment");
            } else {
                console.log("something else went wrong");
            }
        });
};

function makeManager() {
    inquirer
        .prompt([
            {
                type:'input',
                name:'name',
                message:'Enter the name of your manager:'
            },
            {
                type:'input',
                name:'id',
                message:'Enter the ID number of your manager:'
            },
            {
                type:'input',
                name:'email',
                message:'Enter the email of your manager:'
            },
            {
                type:'input',
                name:'office',
                message:'Enter the office number of your manager:'
            },
            {
                type:'list',
                name:'next',
                message:'Pick another employee class to generate, or exit the CLI.',
                choices:['Engineer', 'Intern', 'Manager', 'Exit']
            }
        ]).then(answers => {
            var newInt = new Manager (answers.name, answers.id, answers.email, answers.office);
            myTeam.push(newInt);
            switch(answers.next) {
                case 'Engineer':
                    makeEngineer();
                    break;
                case 'Intern':
                    makeIntern();
                    break;
                case 'Manager':
                    makeManager();
                    break;
                case 'Exit':
                    console.log(myTeam);
                    render(myTeam);
            };

        }).catch(error=> {
            if(error.isTtyError) {
                console.log("prompt could not be rendered in the current environment");
            } else {
                console.log("something else went wrong");
            }
        });
};

makeManager();
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
