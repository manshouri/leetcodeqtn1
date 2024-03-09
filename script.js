const arr1 = [1,2,3];
const arr2 = [4,1,2];
const arr3 = arr2.reverse(); //2 1 4
const arr4 = arr1.reverse(); //3,2,1
const result = [];

for(let i=0; i<arr3.length;i++){
   result.push(arr3[i] + arr4[i]);
   console.log(result)
}



