const inquirer = require('inquirer');
const fs = require('fs');




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
        }]
        // {
        //     type: 'list',
        //     name: 'chooseType',
        //     message: 'Would you like to add an Engineer, an Intern, or quit the program?',
        //     choices: ['Add an Engineer', 'Add an Intern', 'Quit the Program'],
        // }
        .then((results) => whatWouldYouLikeToAdd
            .prompt([
                {
                    type: 'list',
                    name: 'chooseType',
                    message: 'Would you like to add an Engineer, an Intern, or quit the program?',
                    choices: ['Add an Engineer', 'Add an Intern', 'Quit the Program'],
                }])
            // console.log("Success!")
            // const badges = project.badges;
            // project.badgeString = buildBadgeUrls(badges);
            // const readMeContent = readMeTemplate(project);

            // fs.writeFile('README.md', readMeContent, (err) =>
            //     err ? console.log(err) : console.log('Successfully created README!')
            // );

            .catch((err) => new Error(err))))