const repeatString = function(string, num) {
    if (num >= 0) {    
        const result = [];
        for (let i = 0; i < num; i++) {
            result[i] = string
        }
        return result.join("")
    }
    else return "ERROR"

};

// Do not edit below this line
module.exports = repeatString;
