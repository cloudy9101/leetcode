/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
	var max = 0;
	var i = 0;
	var j = height.length - 1;
	while(i < j) {
		max = Math.max(Math.min(height[i], height[j]) * (j - i), max);
		height[i] > height[j] ? j-- : i++;
	}
	return max;
}
