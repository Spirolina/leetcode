var checkIfInstanceOf = function (obj, classFunction) {
    let result = false;
    while (obj !== null && obj !== undefined) {
        if (obj.constructor === classFunction) {
            result = true;
            break;
        }
        obj = obj.__proto__;

    }
    return result;
};