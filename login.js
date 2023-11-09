function btnclick() {
  var audio = document.getElementById("audio");
  var username = document.getElementById("username").value;
  let btn = document.getElementById("btn");
  let label = document.getElementById("label");
  let box = document.getElementById("box");
  let video = document.getElementById("video");
  let a = document.getElementById("a");

  const pass = "123";

  if (username == pass) {
    audio.play();
    text.style.fontSize = "12px";
    text2.textContent = "Hai" + " " + "(nama)" + "..." + " " + "Happy Birthday🥳";
    text.style.fontFamily = "'Poppins', sans-serif";
    text.textContent = "isi pesan + pw bisa reques ama yg ngirim link";
    // text.textContent = "Pinjam dulu seratus :)";
    btn.style.display = "none";
    label.style.display = "none";
    box.style.display = "none";
    video.style.display = "none";
    a.style.width = "100%";
    a.style.cursor = "pointer";
    a.style.height = "100vh";
    a.style.border = "none";
    a.style.backdropFilter = "blur(2px)";
  } else if (username == 0) {
    alert("please input password");
  } else {
    location.reload();
    alert("pasword salah :(");
  }
}

// change image
