var once = function(fn) {
    func = fn;
    return function (...args) {
        
        if(!func) return; 
        let result = func(...args);
        func = 0;
        return result;

    }
};