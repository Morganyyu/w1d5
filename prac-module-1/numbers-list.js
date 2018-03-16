var numList = [];

var sortList = function() {
  numList.sort(function(a, b) {
    return a - b;
  });
  return numList;
}

module.exports = {
  putInList: function(num) {
    numList.push(num);
  },
  sort: sortList
};

