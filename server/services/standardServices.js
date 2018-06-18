exports.clone=function clone(existingArray) {
    var newObj = (existingArray instanceof Array) ? [] : {};
    for (i in existingArray) {
        if (i == 'clone') continue;
        if (existingArray[i] && typeof existingArray[i] == "object") {
            newObj[i] = clone(existingArray[i]);
        } else {
            newObj[i] = existingArray[i]
        }
    }
    return newObj;
}