
// 05. Invert Binary Tree
var invertTree = function(root) {

    if (root === null) {
        return null;
    }

    // Swap left and right
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    // Invert both subtrees
    invertTree(root.left);
    invertTree(root.right);

    return root;
};







// 04. Maximum Depth of Binary Tree

var maxDepth = function(root) {

    if (root === null) {
        return 0;
    }

    let leftDepth = maxDepth(root.left);
    let rightDepth = maxDepth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
};





// 03. Search Insert Position

var searchInsert = function(nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left;
};








// 02. Binary Search

var search = function(nums, target) {

    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {

        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        }

        if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
};






// 01. Remove Duplicates from Sorted Array
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let k = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k - 1]) {
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};

