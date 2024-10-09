module.exports = function check(str, bracketsConfig) {
    const brackets = bracketsConfig.map(item => item[0] + item[1]);
    let found;
    let index;
    let temp = str;
    do {
        found = false;
        for (let i = 0; i < brackets.length; i += 1) {
            index = temp.indexOf(brackets[i]);
            if (index !== -1) {
                temp = temp.replace(brackets[i], '');
                found = true;
            }
        }
    } while (temp.length > 0 && found);

    return temp.length === 0;
}
