// Function for adding markdownStyles
function markdownStyles(data) {
    return `
        # ${data.title}
        ## Description
        ${data.description}
    `;
};