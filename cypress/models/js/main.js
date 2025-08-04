// function sayHello() {
//     alert("Hello from main.js!");
// }

// function writeLog() {
//     console.log('Day la 1 dong log')
// }

// function writeLog(message) {
//     console.log(typeof message)
// }

// function writeLog(message, message2) {
//     if(message) {
//         console.log(message)
//     }
//     if(message2) {
//         console.log(message2)
//     }
// }

// function writeLog() {
//     console.log(arguments)
// }

function writeLog() {
    var myString = '';
    for (var param of arguments) {
        // console.log(param)
        myString += `${param} - `
        console.log(myString)
    }
}


writeLog('Test message', 'Test message 2');