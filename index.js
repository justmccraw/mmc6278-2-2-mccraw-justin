// Your code here

function greet() {
    var username = prompt('What is your name?') 
    
    if(username) {
        alert("Hello, " + username)
    } else {
        alert('Hello')
    }

    var userAge = prompt('How old are you?')
    var ageResult = parseInt(userAge)

    var findAge = confirm('Click "Ok" if you had a birthday so far this year')


}