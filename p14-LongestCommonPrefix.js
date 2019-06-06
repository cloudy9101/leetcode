/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	if(strs.length === 0) {
		return "";
	}
	var cur = strs[0];
	for(var i = 1; i < strs.length; i++) {
		while(cur != strs[i].slice(0, cur.length)) {
			if(cur.length === 0) {
				return cur;
			}
			cur = cur.slice(0, cur.length - 1);
		}
	}
	return cur;
};
