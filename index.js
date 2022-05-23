// Your code here

function greet() {
    var username = prompt('What is your name?') 
    
    if(username) {
        alert("Hello, " + username)
    } else {
        alert('Hello')
    }

    var userAge = prompt('How old are you?')
        parseInt(userAge)

    var findAge = confirm('Click ok if you had a birthday so far this year')

    if (findAge) {
        alert("You must have been born in " + userAge, new Date().getFullYear())
    } else {
        alert("You must have been born in " + userAge + 1 + new Date().getFullYear())
    }


}