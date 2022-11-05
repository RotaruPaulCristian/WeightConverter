const gramsInput = document.getElementById("gramsInput");
const kgOutput = document.getElementById("kgOutput");
const ozOutput = document.getElementById("ozOutput");
const lbsOutput = document.getElementById("lbsOutput");
const output = document.getElementById("output");

output.style.display = "none";

gramsInput.addEventListener("input", (e) => {
  output.style.display = "block";
  let grams = e.target.value;
  kgOutput.innerText = grams / 1000;
  ozOutput.innerText = grams * 0.04;
  lbsOutput.innerText = grams * 0.002205;
});
