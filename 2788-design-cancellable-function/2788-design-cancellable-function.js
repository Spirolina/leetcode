/**
 * @param {Generator} generator
 * @return {[Function, Promise]}
 */
var cancellable = function (generator) {

    const data = {
        cancel: () => { },
    }
   
        data.promise = new Promise(async (resolve, reject) => {
            data.cancel = async () => {
                try {
                    let value = generator.throw('Cancelled').value;
                    if (value !== undefined) resolve(value);

                } catch (e) {
                    reject('Cancelled')
                }
            }
            try {

                const gen = generator
                
                let current = gen.next()
                while (!current.done) {
                    if (current.value instanceof Promise) {
                        let promiseResult
                        try {
                            promiseResult = await current.value;
                            current = (promiseResult !== undefined) ? gen.next(promiseResult) : gen.next();

                        } catch (e) {
                            current = gen.throw(e)
                            
                        }

                    } else {
                        current = gen.next();

                    }
                }
                
                resolve(current.value);
            }
            catch (err) {
                reject(err)

            }
            
    })


    return [data.cancel, data.promise];

};