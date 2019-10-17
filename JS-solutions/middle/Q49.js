/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let map = {}
    for(i in strs){
        let key = strs[i].split("").sort().join("")
        if(!map[key]) {
            map[key] = []
        }
        
        map[key].push(strs[i])
    }

    let rs = []
    for (i in map) {
        rs.push(map[i])
    }

    return rs
};

// [
//     ["ate","eat","tea"],
//     ["nat","tan"],
//     ["bat"]
//   ]
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))