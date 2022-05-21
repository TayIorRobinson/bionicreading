module.exports = function bionicReader(text,formatter) {
    formatter = formatter || module.exports.html
    return text.replace(/[A-Za-z']+/g,(word) => {
        var boldChars = word.length - (word.length > 4 ? 2 : 1);
        return formatter(word.substr(0,boldChars), word.substr(boldChars))
    })
}

module.exports.html = (boldText, regularText) => (boldText ? "<b>" + boldText + "</b>" : "") + regularText;
module.exports.md   = (boldText, regularText) => (boldText ? "**"  + boldText + "**"   : "") + regularText;