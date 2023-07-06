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
        - ${data.toc[0]}
        - ${data.toc[1]}
        - ${data.toc[2]}
        - ${data.toc[3]}
        - ${data.toc[4]}
        - ${data.toc[5]}
        - ${data.toc[6]}
        - ${data.toc[7]}

        ## INSTALLATION 
        ${data.installation}

        ## USAGE 
        ${data.usage}

        ## CREDITS 
        ${data.credits}

        ## LICENSE 
        ${data.license}

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