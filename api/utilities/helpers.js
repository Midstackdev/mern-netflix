export const capitalize = (str) => str?.split('').map( (e, i) => i === 0 ? e.toUpperCase() : e ).join('')

String.prototype.capitalizeTxt = String.prototype.capitalizeTxt || function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

console.log(admin.capitalizeTxt())
const capitalize = ([firstChar, ...rest]) => `${firstChar.toUpperCase()}${rest.join('')}`;

