const arr = [1, 3, 4, 5, 8, 10];

const newArr = arr.map((num,index) => {
  return num + index;
});

console.log(newArr);

const sum = arr.reduce(function(total, next) {
  return total + next;
}); 

console.log(sum);

const filtered = arr.filter(function(item) {
  return item % 2 === 0; 
});

console.log(filtered);

const find = arr.find(function(item) {
  return item === 2;
});

console.log(find);