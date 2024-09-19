function chagneText(elem, spc1, spc2) {
  const e1 = document.querySelector(elem);

  const e1_text = e1.innerText.trim();

  e1.innerText = e1_text.split(spc1).join(spc2);
}

// chagneText("h1", "-", ".");
// chagneText("h2", " ", "/");
// chagneText("h3", "_", "+");

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
  chagneText("h1", "-", ".");
  chagneText("h2", " ", "/");
  chagneText("h3", "_", " ");
});