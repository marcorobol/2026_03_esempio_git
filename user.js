/** @type {function({name: string}): string} */
export function userTemplate(user) { // ESM
    return `Name: ${user.name}`;
}