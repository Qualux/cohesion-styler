// Utility function to convert camelCase to kebab-case
function camelCaseToKebabCase(str) {
    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

// Function to generate styles with camelCase to kebab-case conversion
export function generateStyles(selector, styles) {
    if (!selector || selector === '') {
        return '';
    }

    const filteredStyles = Object.entries(styles)
        .filter(([key, value]) => value !== "")
        .map(([key, value]) => `${camelCaseToKebabCase(key)}: ${value};`)
        .join(' ');

    return `
        ${selector} {
            ${filteredStyles}
        }
    `;
}
