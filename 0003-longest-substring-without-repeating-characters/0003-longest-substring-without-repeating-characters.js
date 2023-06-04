/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0;
    let longest = ''
    
  
        cache = s[0];
        
        for (let i = 1; i < s.length; i++) {
            if (cache.includes(s[i])) {
                if (cache.length > longest.length) {
                    
                    longest = cache;
                }
                i -= (cache.length -1)

    
                cache = s[i];
                continue;
            }
    
            cache += s[i];
    
        }
        if (cache.length > longest.length) {
            longest = cache;
        } 

   


    return longest.length;
};