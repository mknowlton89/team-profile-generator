const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

const team = [];


const addIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is the intern's name?",
        },
        {
            type: 'input',
            name: 'internID',
            message: "What is the intern's ID?",
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the intern's Email?",
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What is the intern's school name?",
        },
        {
            type: 'list',
            name: 'chooseType',
            message: 'Would you like to add an Engineer, an Intern, or quit the program?',
            choices: ['Add an Engineer', 'Add an Intern', 'Quit the Program'],
        }])
        // console.log("addEngineer was called");
        .then((answers) => {
            const intern = new Intern(answers.internName, answers.internID, answers.internEmail, answers.internSchool);

            team.push(intern);

            if (answers.chooseType === "Add an Engineer") {
                addEngineer();
            } else if (answers.chooseType === "Add an Intern") {
                addIntern();
            } else if (answers.chooseType === "Quit the Program") {
                quitProgram();
            }
        })
}

const addEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the engineer's name?",
        },
        {
            type: 'input',
            name: 'engineerID',
            message: "What is the engineer's ID?",
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the engineer's Email?",
        },
        {
            type: 'input',
            name: 'engineerGitHub',
            message: "What is the engineer's GitHub username?",
        },
        {
            type: 'list',
            name: 'chooseType',
            message: 'Would you like to add an Engineer, an Intern, or quit the program?',
            choices: ['Add an Engineer', 'Add an Intern', 'Quit the Program'],
        }])
        // console.log("addEngineer was called");
        .then((answers) => {
            const engineer = new Engineer(answers.engineerName, answers.engineerID, answers.engineerEmail, answers.engineerGitHub);

            team.push(engineer);

            if (answers.chooseType === "Add an Engineer") {
                addEngineer();
            } else if (answers.chooseType === "Add an Intern") {
                addIntern();
            } else if (answers.chooseType === "Quit the Program") {
                quitProgram();
            }
        })
}

const quitProgram = () => {
    console.log(team);
    console.log("The program has ended.");
}


inquirer
    .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name?",
        },
        {
            type: 'input',
            name: 'managerID',
            message: "What is the team manager's ID?",
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the team manager's Email?",
        },
        {
            type: 'input',
            name: 'managerNumber',
            message: "What is the team manager's office number?",
        },
        {
            type: 'list',
            name: 'chooseType',
            message: 'Would you like to add an Engineer, an Intern, or quit the program?',
            choices: ['Add an Engineer', 'Add an Intern', 'Quit the Program'],
        }])
    .then((answers) => {
        // IF THEY CHOSE ENGINEER - CALL THE addEngineer
        const manager = new Manager(answers.managerName, answers.managerID, answers.managerEmail, answers.managerNumber);

        team.push(manager);

        if (answers.chooseType === "Add an Engineer") {
            addEngineer();
        } else if (answers.chooseType === "Add an Intern") {
            addIntern();
        } else if (answers.chooseType === "Quit the Program") {
            quitProgram();
        }
    })