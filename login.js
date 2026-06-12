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

  const pass = "1306";
  
  if (username == pass) {
    audio.play();
    text.textContent = "✅password benar✅";
    btn.textContent = "Tunggu bentar..";
    // btn.textContent = "Spesial surprise ni dari Geng Topi Ijo,, Tunggu bentar..";
    setTimeout(function () {
      text.style.fontSize = "12px";
      text2.textContent ="Aloo" + " " + "mengg" + "..." + " " + "Happy Birthday🥳";
      //text2.textContent = "Happy Birthday🥳";
      text.style.fontFamily = "'Poppins', sans-serif";
      // text.textContent = "I hope today is the best for you. nih kado online hehe";
      text.textContent = "🎉 Happy Birthday Meng! Semoga panjang umur, sehat selalu, rezekinya makin lancar, dan semua yang lagi diusahain tahun ini bisa tercapai. Makasih udah jadi bagian dari Geng Topi Ijo dan udah nemenin banyak momen seru. Semoga makin sukses, makin bahagia, dan tetap jadi orang yang asik diajak ngobrol maupun mabar.🥳🎂💚🍀 ";
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
    alert("oiyaa, satu lagi karna ucapan ini surprise jangan sampe ada yang tau yaa isinyaa. biar bisa di pake lagi buat surprise member lain hehe :b. password sama link akses cukup kamu aja yg tau okeee, it's secrettt") 
    btnAnimate.textContent="Semoga suka yah :)"
  } else {
    animasi.pause();
    audio.play();
    animasi.style.display="none"
    btnAnimate.textContent="PLAY"
  }
}

// matiin inspect elemen
document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

document.addEventListener("keydown", function(e) {

    // F12
    if (e.key === "F12") {
        e.preventDefault();
        return false;
    }

    // Ctrl+Shift+I
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "i") {
        e.preventDefault();
        return false;
    }

    // Ctrl+Shift+J
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "j") {
        e.preventDefault();
        return false;
    }

    // Ctrl+Shift+C
    if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "c") {
        e.preventDefault();
        return false;
    }

    // Ctrl+U
    if (e.ctrlKey && e.key.toLowerCase() === "u") {
        e.preventDefault();
        return false;
    }

    // Ctrl+S
    if (e.ctrlKey && e.key.toLowerCase() === "s") {
        e.preventDefault();
        return false;
    }
});









