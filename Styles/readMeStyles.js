// Function for adding markdownStyles
function markdownStyles(data) {
    return `
        # ${data.title}
        ## INSTALLATION ${data.description}
        ## TABLE OF CONTENTS ${data.toc}
        ## INSTALLATION ${data.installation}
        ## USAGE ${data.usage}
        ## CREDITS ${data.credits}
        ## LICENSE ${data.license}
        ## BADGES ${data.badges}
        ## FEATURES ${data.features}
        ## HOW TO CONTRIBUTE ${data.contribute}
        ## TESTS ${data.tests}
    `;
};

// Specifies the values and functions to be exported to index.js
module.exports = markdownStyles;