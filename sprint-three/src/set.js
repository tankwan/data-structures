var Set = function() {
  // var set = Object.create(setPrototype);
  // set._storage = [];
  // return set;
  var set = new HashTable();
  return _.extend(set, setPrototype);
};

var setPrototype = {};

setPrototype.add = function(item) {
  // if (this._storage.indexOf(item) === -1) {
  //   this._storage.push(item);
  // }
  this.insert(item, item);
};

setPrototype.contains = function(item) {
  // return this._storage.indexOf(item) !== -1;
  return this.retrieve(item) !== undefined;
};

// uses the remove method from HashTable

// setPrototype.remove = function(item) {
//   var index = this._storage.indexOf(item);
//   if (index !== -1) {
//     this._storage.splice(index, 1);
//   }
// };

/*
 * Complexity: What is the time complexity of the above functions?
 */

// Amended to allow taking in of numbers, arrays, objects through hash table