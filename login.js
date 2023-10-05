var audio = document.getElementById("audio");
let btn = document.getElementById("btn");
let username = document.getElementById("username");
let label = document.getElementById("label");
let box = document.getElementById("box");
let video = document.getElementById("video");
let a = document.getElementById("a");

function btncklik() {
  if (username.value) {
    audio.play();
    text.style.fontSize = "12px";
    text.textContent = "isi kata bisa reques ama yg ngirimin link ini";
    // "Happy" + " Birdthdayy" + " " + username.value + "🎁🎉🎂🥳";
    username.style.display = "none";
    btn.style.display = "none";
    label.style.display = "none";
    box.style.display = "none";
    video.style.display = "none";
    a.style.border = "none";
  }
}

// change image
