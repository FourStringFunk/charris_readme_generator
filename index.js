// Define the packages that are required for this application to run
    const inquirer = require("inquirer"); // - Inquirer
    const fs = require("fs"); // - fs
    const path = require("path"); // - path

    // - README styles
    const markdownStyles = require("./Styles/readMeStyles");

// Define the list of question prompts and answer fields to collect information from the user
const userInput = [
    // PROJECT TITLE
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
    },
    // DESCRIPTION
    {
        type: "input",
        name: "description",
        message: "Please provide a 2-3 sentence description of your project:",
    },
    // USER STORY
    {
        type: "input",
        name: "story",
        message: "Please define the user story for this project here:"
    },
    // ACCEPTANCE CRITERIA
    {
        type: "input",
        name: "criteria",
        message: "Please define the acceptance criteria for this project here:"
    },
    // INSTALLATION
    {
        type: "input",
        name: "installation",
        message: "Please provide an overview of how to install the application:",
    },
    // USAGE
    {
        type: "input",
        name: "usage",
        message: "Please provide an overview of how to use the application:",
    },
    // CREDITS
    {
        type: "input",
        name: "credits",
        message: "Who contributed to the success of this project and deserves credit?",
    },
    // QUESTIONS
    {
        type: "input",
        name: "name",
        message: "Please enter your full name."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address."
    },
    {
        type: "input",
        name: "github",
        message: "Please enter the link to your GitHub profile."
    },
    // LICENSE
    {
        type: "list",
        name: "license",
        message: "Which license did you use for this project?",
        choices: ["Apache License 2.0", "MIT License", "Creative Commons Zero v1.0 Universal", "Mozilla Public License 2.0", "The Unlicense", "None"],
    },
    // BADGES
    {
        type: "list",
        name: "badges",
        message: "Will you add badges to this project at a later point in time?",
        choices: ["Yes", "No"]
    },
    // FEATURES
    {
        type: "input",
        name: "features",
        message: "Describe the features of your project below:",
    },
    // HOW TO CONTRIBUTE
    {
        type: "input",
        name: "contribute",
        message: "Write a 2-3 sentence description of how you would like others to contribute to this project:",
    }, 
    // TESTS
    {
        type: "input",
        name: "tests",
        message: "Please lists the tests you built for your project and how to run them:",
    },
];
    
// Define functionality for creating the README file
    // Create a function that writes user input data to README file
    function writeToFile(fileName, data) {
        return fs.writeFileSync(path.join(process.cwd(), fileName), data);
    }

// Initialize the application
    // init function
    function init() {
        inquirer
            .prompt(userInput)
            .then((answers) => {
                console.log(answers);
                writeToFile("README.md", markdownStyles(answers));
            })
            .catch((err) => {
                console.log(err);
            })
    }
    // init function call
    init();