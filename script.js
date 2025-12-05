const text = document.getElementById("text");
const phrases = ["Frontend Developer", "Python Developer", "React Developer ", "MERN Stack Developer"];
let index = 0, charIndex = 0;

function type() {
  if (charIndex < phrases[index].length) {
    text.textContent += phrases[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (charIndex > 0) {
    text.textContent = phrases[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % phrases.length;
    setTimeout(type, 300);
  }
}

type();

// Animate skills on scroll
const skillSection = document.querySelector(".skillList");
const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      skillSection.classList.add("show");
    } else {
      skillSection.classList.remove("show");
    }
  });
}, { threshold: 0.5 });

skillObserver.observe(skillSection);



