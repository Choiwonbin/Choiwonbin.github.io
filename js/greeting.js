const nameForm = document.querySelector(".main__name");
const nameInput = document.querySelector(".main__name input");
const greetingName = document.querySelector(".main__greeting h1");
const greetingText = document.querySelector(".main__greeting h2");

function nameHandler(event) {
    event.preventDefault();
    nameInput.style.display = "none";
    const nameValue = nameInput.value;
    localStorage.setItem("username", nameValue);
    paintGreeting(nameValue);
}

function paintGreeting(username) {
    const date = new Date();
    const hour = date.getHours();
    greetingName.innerText = `${username}님`;
    if(hour>=22 || hour < 6) {
        greetingText.innerText = "오늘 하루도 고생 하셨어요";
    } else if(hour>=17) {
        greetingText.innerText = "오늘 저녁에는 노을을 보는건 어떤가요";
    } else if(hour >=12) {
        greetingText.innerText = "노곤한 점심에는 산책을 해보아요";
    } else {
        greetingText.innerText = "오늘도 힘찬 하루 보내세요";
    }
    nameForm.style.display = "none";
    greetingName.style.display = "block"; 
    greetingText.style.display = "block";
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
    greetingName.style.display = "none";
    greetingName.style.display = "none";
    nameForm.style.display = "block";
    nameForm.addEventListener("submit", nameHandler);
} else {
    paintGreeting(savedUsername);
}

