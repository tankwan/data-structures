var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};  
  newStack.storage = {};
  newStack.count = 0;
  // return _.extend(newStack, Stack.stackMethods);
  newStack.push = stackMethods.push;
  newStack.pop = stackMethods.pop;
  newStack.size = stackMethods.size;
  return newStack;
};

stackMethods = {
  push: function(value) {
    this.storage[this.count] = value;
    this.count++;
  },
  pop: function() {
    this.count--;
    if (this.count < 0) {
      this.count = 0;
    }
    return this.storage[this.count];
  },
  size: function() {
    return this.count;
  }
};
