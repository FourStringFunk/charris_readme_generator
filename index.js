// Define the packages that are required for this application to run
    const inquirer = require("inquirer") // - Inquirer
    const fs = require("fs"); // - fs
    const path = require("path") // - path
    // - README styles(?)

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
        message: "Please provide a 2-3 sentence describing your project",
    },
    // TABLE OF CONTENTS
    {
        type: "checkbox",
        name: "toc",
        message: "Build your Table of Contents by selecting all that apply. Only select those fields for which you plan to add detailed information.",
        choices: ["INSTALLATION", "USAGE", "CREDITS", "LICENSE", "BADGES", "FEATURES", "HOW TO CONTRIBUTE", "TESTS"],
    },
    // INSTALLATION
    {
        type: "input",
        name: "installation",
        message: "Please provide an overview of how to install the application",
    },
    // USAGE
    {
        type: "input",
        name: "usage",
        message: "Please provide an overview of how to use the application.",
    },
    // CREDITS
    {
        type: "input",
        name: "credits",
        message: "Who contributed to the success of this project and deserves credit?",
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
        message: "Describe the features of your project below.",
    },
    // HOW TO CONTRIBUTE
    {
        type: "input",
        name: "contribute",
        message: "Write a 2-3 sentence description of how you would like other to contribute to this project.",
    },
    // TESTS
    {
        type: "input",
        name: "tests",
        message: "Please lists the tests you built for your project and how to run them.",
    },
];
    

// Define functionality for creating the README file
    // Create a function that writes user input data to README file 

// Initialize the application
    // init function
    // init function call

// Figure out how the heck I apply README styles to the file I created.