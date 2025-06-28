//libraries like jquery etc
// Global variables and functions accessible from HTML
let i = 0;
const messages = [
  "",
  "Hi feltut, how are uu?🫶",
  "I know I've hurt you, and before I say anything else, I want to say I'm deeply, truly sorry.",
  "I know i give you tough days, but know that i love you with all my heart,",
  "and i am doing everything to better myself for you.",
  "I know our journey isn't perfect, but It's ours. And ill stick with you until the end.",
  "don't care how complicated this gets, i still want you. You're my person, you're the one.",
  "With you, It's different, all i see is you. You complete me i love you and always will .",
  "And thenn, i have something for uu😉",
  "sorry if it sounds cheesy, i just can't help it when it's someone i really love🫶",
  "i don't know why, but your eyes feel like home to me.",
  "your smile feel like the safest place i've ever known.",
  "have you ever noticed that your smile speak more than words ever could?",
  "your smile don't need to say much, they already brighten up my life.",
  "i'm all in, lovvvve youuu so muchhh feltuttt❤️🫶",
];

function nextPopup() {
  i++;
  if (i < messages.length) {
    document.getElementById("popupText").innerText = messages[i];
  } else {
    // Menyembunyikan popup dan menampilkan halaman pertanyaan
    document.getElementById("popup").classList.remove("active");
    document.getElementById("questionPage").classList.add("active");
  }
}

// Fungsi untuk memindahkan tombol "Tidak"
function moveNoBtn() {
  const btn = document.getElementById("noBtn");
  const x = Math.random() * window.innerWidth * 0.8;
  const y = Math.random() * window.innerHeight * 0.8;
  btn.style.left = x + "px";
  btn.style.top = y + "px";
}

// Fungsi untuk melanjutkan ke halaman galeri
function goToGallery() {
  document.getElementById("questionPage").classList.remove("active");
  document.getElementById("galleryPage").classList.add("active");
}

window.addEventListener("DOMContentLoaded", () => {
  // Fungsi untuk otomatis memindahkan galeri ke gambar berikutnya (slide)
  const gallery = document.querySelector(".gallery");
  let currentIndex = 0;

  function autoSlide() {
    const images = gallery.querySelectorAll("img");
    const totalImages = images.length;

    // Slide ke gambar berikutnya
    currentIndex++;

    if (currentIndex >= totalImages) {
      currentIndex = 0; // Kembali ke gambar pertama setelah mencapai yang terakhir
    }

    // Memindahkan posisi galeri untuk menampilkan gambar selanjutnya
    gallery.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Menggunakan setInterval untuk memicu auto-slide setiap 3 detik
  let slideInterval = setInterval(autoSlide, 3000);

  // Jika kamu ingin menghentikan slide, kamu bisa menggunakan:
  // clearInterval(slideInterval);
});
