/*
 Vòng lặp - Loop
 1. for - Lặp với điều kiện đúng
 2. for/in - Lặp qua key của đối tượng
 3. for/of - Lặp qua value của đối tượng
 4. while - Lặp khi điều kiện đúng
 5. do/while - Lặp ít nhất 1 lần, sau đó lặp khi điều kiện đúng

*/

// for (var i = 1; i <= 1000; i++) {
//     // code
//     console.log(i);
// }

// var i = 1;
// for(;i <= 1000;i++) {
//     console.log(i)
// }

var myArray = [
    'Javascript',
    'PHP',
    'Java',
    'Dart'
];

var arrayLength = myArray.length;

for (var i = 0; i < arrayLength; i++) {
    console.log(myArray[i]);
}