const fname = document.querySelector('#fname');
const lname = document.querySelector("#lname");
const passWord = document.querySelector('#password')
const emailBox = document.querySelector('#email');
const form = document.querySelector('#form');
const submitBtn = document.querySelector('#submit-btn');
const msgBox = document.querySelector("#msg-box");

form.addEventListener("submit", (e) => {
    let message = [];
    if(passWord.value.length < 8) {
        message.push("message should be more than 30 character!");
    }
    if (message.length > 0) {
        e.preventDefault();
        msgBox.innerText = message.join(", ");
    }
    if (emailBox.value === '') {
        message.push("please, a valid email");
        alert('Email is a required field');
    }
   
});

submitBtn.addEventListener('click', function() {
    console.log("clicked")
})

for(let step = 0; step <= 100; step++) {
    console.log(`${step}. sorry babe`);
};