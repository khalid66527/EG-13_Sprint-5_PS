
// 08. Min Stack  

var MinStack = function() {
    this.stack = [];
    this.minStack = [];
};

MinStack.prototype.push = function(val) {
    this.stack.push(val);

    if (!this.minStack.length || val <= this.getMin()) {
        this.minStack.push(val);
    }
};

MinStack.prototype.pop = function() {
    if (this.stack.pop() === this.getMin()) {
        this.minStack.pop();
    }
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};




// 07. Rotate Array
var rotate = function(nums, k) {
    k = k % nums.length;

    // Reverse entire array
    nums.reverse();

    // Reverse first k elements
    let left = 0;
    let right = k - 1;

    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }

    // Reverse remaining elements
    left = k;
    right = nums.length - 1;

    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
};





// 06. Product of Array Except Self
var productExceptSelf = function(nums) {
    let result = new Array(nums.length).fill(1);

    let left = 1;

    for (let i = 0; i < nums.length; i++) {
        result[i] = left;
        left *= nums[i];
    }

    let right = 1;

    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= right;
        right *= nums[i];
    }

    return result;
};







// 05. Invert Binary Tree
var invertTree = function(root) {

    if (root === null) {
        return null;
    }

    let temp = root.left;
    root.left = root.right;
    root.right = temp;

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

