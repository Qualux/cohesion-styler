export function generateStyles( selector, styles ) {

    if( !selector || selector === '' ) {
        return '';
    }

    const filteredStyles = Object.entries(styles)
        .filter(([key, value]) => value !== "")
        .map(([key, value]) => `${key}: ${value};`)
        .join(' ');

    return `
        ${selector} {
            ${filteredStyles}
        }
    `;
    
}