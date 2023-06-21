/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = async function (functions) {
    return new Promise((resolve, reject) => {
        let results = [];
        let resolved = 0;
        for (let i = 0; i < functions.length; i++) {
            functions[i]()
                .then(res => {
                    results[i] = res
                    resolved++;
                    if (resolved === functions.length) resolve(results);
                })
                .catch(err => reject(err));
        }
    })
    
};