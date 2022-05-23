// This is **horrible code**. If anyone is good with maths please see
// https://github.com/TayIorRobinson/bionicreading/issues/1
function getBoldLength(l) {
    if      (l < 5)  return 1;
    else if (l < 13) return 2;
    else if (l < 18) return 3;
    else if (l < 24) return 4;
    else if (l < 30) return 5;
    else return Math.ceil(l/6); // best i could manage.
}

module.exports = function bionicReader(text,formatter) {
    formatter = formatter || module.exports.html
    return text.replace(/[A-Za-z0-9']+/g,(word) => {
        // entirely numeric strings don't count!
        var boldChars = isNaN(Number(word)) 
            ? word.length - getBoldLength(word.length)
            : 0;
        return formatter(word.substr(0,boldChars), word.substr(boldChars))
    })
}

module.exports.html = (boldText, regularText) => (boldText ? "<b>" + boldText + "</b>" : "") + regularText;
module.exports.md   = (boldText, regularText) => (boldText ? "**"  + boldText + "**"   : "") + regularText;