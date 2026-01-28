const btn = document.getElementById("theme");
btn.onclick = () => {
  document.body.classList.toggle("light");
  btn.textContent = document.body.classList.contains("light") ? "🌞" : "🌙";
};
