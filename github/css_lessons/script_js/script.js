// a = 25;
// b = 35;
// const sum = a+b;
// console.log(sum);

// name = 'Yaroslav';
// text = 'Hello';
// console.log(text, name);

// a = Number(prompt('Введіть перше число:'));
// b = Number(prompt('Введіть друге число:'));
// console.log('Сума:', a+b, 'Різниця:',
//      a-b, 'Добуток:', a*b, 'Частка:', a/b);

// userName = prompt("Введіть своє ім'я");
// alert('Привіт ' + userName + '! Радий тебе бачити!');

// birthYear = Number(prompt('Введіть свій рік народження:'));
// currentYear = 2025;
// alert('Тобі ' + (currentYear - birthYear) + ' років!');


// function Name(name){
//     console.log('Hello ' + name + '!');
// }

// Name('Yaroslav');
// Name('Ivan');


// function Number(number){
//     return number ** 2;
// }

// console.log(Number(6));


// function sum(a, b){
//     return a + b;
// }

// console.log(sum(10, 2));


// function dist(x1, x2, y1, y2){
//     return (Math.sqrt((y1 - x1) ** 2 + (y2 - x2) ** 2));
// }

// console.log(dist(4, 5, 4, 7));







// function random(){
//     let confirmMessage = document.getElementById('confirmMessage');
//     let max = parseInt(document.getElementById('maxNumber').value);
//     let min = parseInt(document.getElementById('minNumber').value);

//     if (max > min){
//         confirmMessage.textContent = 'Прийнято!';
//         confirmMessage.style.color = 'green';
//         document.getElementById('checkBtn').disabled = false;
//         randomNamber = Math.floor(Math.random()*(max - min + 1)) + min;
//     } else if (max < min){
//         confirmMessage.textContent = 'Помилка! Максимальне число менше за мінімальне!';
//         confirmMessage.style.color = 'red';
//         document.getElementById('checkBtn').disabled = true;
//     } else if (max === min){
//         confirmMessage.textContent = 'Помилка! Максимальне число дорівнює мінімальному!';
//         confirmMessage.style.color = 'red';
//         document.getElementById('checkBtn').disabled = true;
//     } else if (isNaN,max){
//         confirmMessage.textContent = 'Помилка! Мінімальне число відсутнє!';
//         confirmMessage.style.color = 'blue';
//         document.getElementById('checkBtn').disabled = true;
//     } else if (isNaN,min){
//         confirmMessage.textContent = 'Помилка! Максимальне число відсутнє!';
//         confirmMessage.style.color = 'blue';
//         document.getElementById('checkBtn').disabled = true;
//     }
// }


// let attempts = 0;


// function checkGuess(){
//     let userGuess = parseInt(document.getElementById('guessField').value);
//     let resultMessage = document.getElementById('resultMessage');

//     attempts = attempts + 1;

//     if (userGuess < randomNamber){
//         resultMessage.textContent = 'Замало. Спробуй ще!';
//         resultMessage.style.color = 'red';
//     } else if (userGuess > randomNamber){
//         resultMessage.textContent = 'Забагато. Спробуй ще!';
//         resultMessage.style.color = 'red';
//     } else if (userGuess == randomNamber){
//         resultMessage.textContent = 'Ти вгадав число за ' + attempts + ' спроб!';
//         resultMessage.style.color = 'green';
//     } else if(randomNamber, isNaN){
//         resultMessage.textContent = 'Введіть максимальне і мінімальне число!';
//         resultMessage.style.color = 'blue'
//     } else {
//         resultMessage.textContent = 'Введіть своє число!';
//         resultMessage.style.color = 'blue'; 
//     }
// }

// function restartGame(){
//     attempts = 0;
//     randomNamber = NaN;
    
//     document.getElementById('maxNumber').value = '';
//     document.getElementById('minNumber').value = '';
//     document.getElementById('confirmMessage').textContent = '';

//     document.getElementById('guessField').value = '';
//     document.getElementById('checkBtn').disabled = false;
//     document.getElementById('resultMessage').textContent = 'Введіть число';
//     document.getElementById('resultMessage').style.color = 'white';
// }






// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// numbers.reverse();
// console.log(numbers)
// console.log(numbers.length)


// let random = []
// random.push(Math.floor(Math.random()*(100 - 0 + 1)) + 0);
// random.push(Math.floor(Math.random()*(100 - 0 + 1)) + 0);
// random.push(Math.floor(Math.random()*(100 - 0 + 1)) + 0);
// random.push(Math.floor(Math.random()*(100 - 0 + 1)) + 0);
// random.push(Math.floor(Math.random()*(100 - 0 + 1)) + 0);
// console.log(random)

// function newRandom(){
//     random.pop();
//     random.pop();
//     random.pop();
//     random.pop();
//     random.pop();
//     random.push(Math.floor(Math.random()*(100 - 0 + 1)) + 0);
//     random.push(Math.floor(Math.random()*(100 - 0 + 1)) + 0);
//     random.push(Math.floor(Math.random()*(100 - 0 + 1)) + 0);
//     random.push(Math.floor(Math.random()*(100 - 0 + 1)) + 0);
//     random.push(Math.floor(Math.random()*(100 - 0 + 1)) + 0);
//     console.log(random)
// }


// let user = {
//     name: 'John',
//     country: 'Ukraine',
//     job: 'pilot'
// };

// let user1 = {
//     name: 'Ben',
//     country: 'USA',
//     job: 'driver'
// };

// console.log(Object.values(user));
// console.log(Object.keys(user));


// if (user['country'] == 'USA'){
//     console.log('True');
// } else if (user1['country'] == 'UK'){
//     console.log('True');
// } else {
//     console.log('False');
// };




let users = [];
let form = document.getElementById('registrationForm');
let userList = document.getElementById('userList');
const MIN_NAME_LENGTH = 3;
const MIN_PASSWORD_LENGTH = 6;

const NAME_REGEX = /^[A-Z][a-z]+$/;

function isValidName(name) {
    // if (name.length > MIN_NAME_LENGTH){
    //     return true
    // } else {
    //     alert("Ім'я повинне містити не менше " + MIN_NAME_LENGTH + " символів.")
    // }
    return NAME_REGEX.test(name);
}

const PASSWORD_REGEX = /^\d{6,10}$/

function isValidPassword(password) {
    // if (password.length > MIN_PASSWORD_LENGTH){
    //     return true
    // } else {
    //     alert("Ім'я повинне містити не менше " + MIN_PASSWORD_LENGTH + " символів.")
    // }

    return PASSWORD_REGEX.test(password)
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isEmailExist(email) {
    // for (let i = 0; i < users.length; i++) {
    //     if (users[i].email === email) {
    //         return true;
    //     }
    // }
    // return false;

    // console.log(email.match(EMAIL_REGEX));

    return EMAIL_REGEX.test(email);
}

form.onsubmit = function(event){
    event.preventDefault()
    const name = document.getElementById('name').value;

    if (!isValidName(name)) {
        alert("Ім'я вказано не коректно");
        return
    }

    const email = document.getElementById('email').value;

    if (isEmailExist(email)) {
        alert('Користувач із таким email вже існує!');
        return;
    }

    const password = document.getElementById('password').value;

    if (!isValidPassword(password)) {
        alert('Пароль не коректний');
        return
    }

    const newUser = {
        name: name,
        email: email,
        password: password  
    };
    users.push(newUser);
    form.reset();
    console.log(users);
    updateUserList();
};

function updateUserList(){
    userList.innerHTML = ''
    for (let i = 0; i < users.length; i++){
        const user = users[i]
        const listItem = document.createElement('li');
        listItem.textContent = user.name + ' ' + user.email;
        userList.appendChild(listItem);
    }
}


// let count = 0;
// while (count < 5){
//     alert(count);
//     count++;
// };


// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < numbers.length; i++){
//     if (numbers[i] % 2 === 0){
//         console.log(numbers[i])
//     }
// }



// let weight = 42;
// for (let i = 0; i <= 15; i++){
//     let moonWeight = (weight * 16.5) / 100;
//     console.log('Ваша вага на Землі: ' + weight + ' Ваша вага на Місяці: ' + moonWeight)
//     weight++
// }





// let taskInput = document.getElementById('taskInput');
// let addTaskBtn = document.getElementById('addTaskBtn');
// let taskList = document.getElementById('taskList');

// addTaskBtn.onclick = function () {
//     if (taskInput.value == '') {
//         alert('Введіть текст');
//     } else {
//         let task = taskInput.value;
//         let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//         tasks.push(task);
//         localStorage.setItem('tasks', JSON.stringify(tasks));
//         addTaskToDOM(task);
//     };
// };

// function addTaskToDOM(task){
//     let newLiElement = document.createElement('li');
//     let newDeleteBtn = document.createElement('button');
//     newLiElement.textContent = task;
//     newDeleteBtn.textContent = 'Видали';
//     newDeleteBtn.onclick = function () {
//         removeTask(newLiElement, task);
//     };
//     newLiElement.appendChild(newDeleteBtn);
//     taskList.appendChild(newLiElement);
//     taskInput.value = '';
// }

// window.onload = function () {
//     let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     for (let i = 0; i < tasks.length; i++) {
//         addTaskToDOM(tasks[i]);
//     };
// };

// function removeTask (newLiElement, task) {
//     let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     for (let i = 0; i < tasks.length; i++) {
//         if (tasks[i] === task) {
//             tasks.splice(i, 1);
//             break;
//         };
//     };
//     localStorage.setItem('tasks', JSON.stringify(tasks));
//     newLiElement.remove();
// }




// let car = document.getElementById('car');
// let leftPosition = 0;
// let topPosition = 0;

// function moveCarRightDown () {
//     leftPosition += 5;
//     car.style.left = leftPosition + 'px';
//     topPosition += 5;
//     car.style.top = topPosition + 'px';
//     if (leftPosition >= 300) {
//         requestAnimationFrame(moveCarLeftDown);
//     } else {
//         requestAnimationFrame(moveCarRightDown);
//     }
// }

// function moveCarLeftDown () {
//     leftPosition -= 5;
//     car.style.left = leftPosition + 'px';
//     topPosition += 5;
//     car.style.top = topPosition + 'px';
//     if (leftPosition <= 150) {
//         requestAnimationFrame(moveCarLeftTop);
//     } else {
//         requestAnimationFrame(moveCarLeftDown);
//     }
// }

// function moveCarLeftTop () {
//     leftPosition -= 5;
//     car.style.left = leftPosition + 'px';
//     topPosition -= 5;
//     car.style.top = topPosition + 'px';
//     if (leftPosition <= 0) {
//         requestAnimationFrame(moveCarRightTop);
//     } else {
//         requestAnimationFrame(moveCarLeftTop);
//     }
// }

// function moveCarRightTop () {
//     leftPosition += 5;
//     car.style.left = leftPosition + 'px';
//     topPosition -= 5;
//     car.style.top = topPosition + 'px';
//     if (leftPosition >= 150) {
//         requestAnimationFrame(moveCarRightDown);
//     } else {
//         requestAnimationFrame(moveCarRightTop);
//     }
// }

// requestAnimationFrame(moveCarRightDown)




// let startButton = document.getElementById('startAnimation');
// let box = document.getElementById('box');

// startButton.onclick = function () {
//     box.style.animation = 'move 2s';
//     setTimeout(function() {
//         box.style.animation = '';
//     }, 2000);
// }