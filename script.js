let yesBtn = document.getElementById("yes-btn");
let noBtn = document.getElementById("no-btn");
let gif = document.getElementById("cat-gif");
let toast = document.getElementById("tease-toast");

let yesSize = 20;
let noSize = 20;

const messages = [
    "Please 🥺",
    "Think again 😭",
    "Are you sure? 💔",
    "Don't do this 😭",
    "Come on 😭❤️",
    "You know you want to 😏"
];

let count = 0;

function handleNoClick() {

    yesSize += 10;
    noSize -= 2;

    yesBtn.style.fontSize = yesSize + "px";
    noBtn.style.fontSize = noSize + "px";

    toast.innerText = messages[count % messages.length];

    count++;

    gif.src = "https://media.tenor.com/3G0Q9V7S9wQAAAAi/peach-goma.gif";

    if(noSize <= 8){
        noBtn.style.display = "none";
        toast.innerText = "No button has given up 😭";
    }
}

function handleYesClick() {

    gif.src = "https://media.tenor.com/W6LWPtj6QKIAAAAi/cute-love.gif";

    toast.innerText = "Yayyyyy ❤️";
}

function toggleMusic() {

    let music = document.getElementById("bg-music");

    if(music.paused){
        music.play();
    } else {
        music.pause();
    }
}
