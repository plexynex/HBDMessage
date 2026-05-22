let animasi = document.getElementById("animasi");
var audio = document.getElementById("audio");

animasi.style.display="none"

function btnclick() {
  var username = document.getElementById("username").value;
  let btn = document.getElementById("btn");
  let label = document.getElementById("label");
  let box = document.getElementById("box");
  let video = document.getElementById("video");
  let a = document.getElementById("a");
  let text = document.getElementById("text");

  const pass = "0522";
  
  if (username == pass) {
    audio.play();
    text.textContent = "✅password benar✅";
    btn.textContent = "Tunggu bentar..";
    setTimeout(function () {
      text.style.fontSize = "12px";
      text2.textContent ="Aloo" + " " + "ollaaa" + "..." + " " + "Happy Birthday🥳";
      //text2.textContent = "Happy Birthday🥳";
      text.style.fontFamily = "'Poppins', sans-serif";
      text.textContent = "I hope today is the best for you. nih kado online hehe";
      btn.style.display = "none";
      label.style.display = "none";
      box.style.display = "none";
      video.style.display = "none";
      a.style.width = "100%";
      a.style.cursor = "pointer";
      a.style.height = "100vh";
      a.style.border = "none";
      a.style.backdropFilter = "blur(2px)";
      animasi.style.display="block"
    }, 8500);
  } else if (username == 0) {
    text.textContent = "🙁please input password🙁";
  } else {
    text.textContent = "🚫password salah🚫";
   alert("paswordnya bulan ama tnggal kmu 4 karakter. kalo masi gabisa kasi tau dulu🗿");
  }
}

let btnAnimate = document.getElementById("btnAnimate");

function triggerBtn() {
  if (animasi.paused) {
    animasi.play();
    audio.pause()
    //alert("parah bet ga mau ngasih tauu, pdhal niatnya pen kasi surprise kedepannya huhu😭😭")
    alert("Jangan di pause yaa!! ntar ilang wkwk😅") 
    btnAnimate.textContent="Semoga suka yah :)"
  } else {
    animasi.pause();
    audio.play();
    animasi.style.display="none"
    btnAnimate.textContent="PLAY"
  }
}











