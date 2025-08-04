var courses = [
    'Javascript',
    'PHP',
    'Ruby'
]

// courses.length = 1000;

// var output = courses.forEach(function(course, index, array){
//     console.log(course, index, array)
// });

// console.log(output)

Array.prototype.forEach2 = function(callback) {
    for (var index in this) {
        console.log('index: ', index)
    }
}

// courses.forEach2(function(course, index, array){
//     console.log(course, index, array)
// })

console.log(courses)


