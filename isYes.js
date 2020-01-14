//allows isYes to be referenced
export default isYes;
//declares or creates isYes function
function isYes(str) {
    //changes the input string to lowercase letters and checks to see if they are equal to 'yes' OR (||) equal to 'y'
    if (str.toLowerCase() === 'yes' || str.toLowerCase() === 'y') {
        return true;
    }
    //if it doesn't match sets the value to 'false'
    else return false;
}
