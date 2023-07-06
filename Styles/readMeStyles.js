// Function for adding markdownStyles
function markdownStyles(data) {
    return `
        # ${data.title}
        ## Description ${data.description}
    `;
};

// Specifies the values and functions to be exported to index.js
module.exports = markdownStyles;