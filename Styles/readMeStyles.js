// Function for adding markdownStyles
function markdownStyles(data) {
    return `
        # ${data.title}

        ## DESCRIPTION
        ${data.description}

        ### USER STORY
        ${data.story}

        ### ACCEPTANCE CRITERIA

        ## TABLE OF CONTENTS
        - [INSTALLATION](#installation)
        - [USAGE](#usage)
        - [CREDITS](#credits)
        - [LICENSE](#license)
        - [BADGES](#badges)
        - [FEATURES](#features)
        - [HOW TO CONTRIBUTE](#how-to-contribute)
        - [TESTS](#tests)

        ## INSTALLATION 
        ${data.installation}

        ## USAGE 
        ${data.usage}

        ## CREDITS 
        ${data.credits}

        ### QUESTIONS
        For questions about this project, please contact ${data.name} at ${data.email}. You can also view this project on my github: ${data.github}.

        ## LICENSE 
        ${data.license}
        Copyright (c) 2023 ${data.name}

        ## BADGES 
        ${data.badges}

        ## FEATURES 
        ${data.features}

        ## HOW TO CONTRIBUTE 
        ${data.contribute}
        
        ## TESTS 
        ${data.tests}
    `;
};

// Specifies the values and functions to be exported to index.js
module.exports = markdownStyles;