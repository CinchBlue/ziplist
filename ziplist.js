const zipList = function zipList(list0, list1) {
  let temp0 = list0;
  let temp1 = list1;
  let result = [];
  while (temp1.length > 0) {
    result.push(temp0[0]);
    result.push(temp1[1]);
    temp0 = temp0.slice(1);
    temp1 = temp1.slice(1);
  }
  return result;
};

const zipListTheSimpleWay = function zipListTheSimpleWay(list0, list1) {
  return _.flatten(_.zip(list0, list1));
};

const testList0 = [1, 3, 5];
const testList1 = [2, 4, 6];

console.log(zipList(testList0, testList1));
console.log(zipListTheSimpleWay(testList0, testList1));
