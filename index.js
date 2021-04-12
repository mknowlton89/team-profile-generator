const inquirer = require('inquirer');
const fs = require('fs');

let whatWouldYouLikeToAdd = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'chooseType',
            message: 'Would you like to add an Engineer, an Intern, or quit the program?',
            choices: ['Add an Engineer', 'Add an Intern', 'Quit the Program'],
        }])
}

const addEngineer = () => {
    // inquirer.prompt([
    //     {
    //         type: 'list',
    //         name: 'chooseType',
    //         message: 'Would you like to add an Engineer, an Intern, or quit the program?',
    //         choices: ['Add an Engineer', 'Add an Intern', 'Quit the Program'],
    //     }])
    console.log("addEngineer was called");
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
            type: 'list',
            name: 'chooseType',
            message: 'Would you like to add an Engineer, an Intern, or quit the program?',
            choices: ['Add an Engineer', 'Add an Intern', 'Quit the Program'],
        }])
    .then((answers) => {
        // IF THEY CHOSE ENGINEER - CALL THE add
        console.log(answers);
        if (answers.chooseType === "Add an Engineer") {
            addEngineer();
        }
    })

            // .catch((err) => new Error(err))))