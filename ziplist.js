const L1 = ['a', 'b', 'c'];
const L2 = [1, 2, 3];


function zipList(list1, list2) {
  const answer = [];
  for (let i = 0; i < list1.length; i++) {
    answer.push(list1[i], list2[i]);
  }
  return answer;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}
console.log(zipList(L1, L2));
console.log(zipListTheSimpleWay(L1, L2));
