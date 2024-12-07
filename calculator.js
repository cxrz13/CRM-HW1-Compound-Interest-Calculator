principleInput = document.querySelector("#principle");
interestInput = document.querySelector("#rate");
interestOutput = document.querySelector("#rate-output");
compoundInput = document.querySelector("#compound");
yearInput = document.querySelector("#years");
earnedOutput = document.querySelector("#earned");
totalOutput = document.querySelector("#total");

principleInput.addEventListener("input", updateCalculator);
interestInput.addEventListener("input", () => {
  const input = Number(interestInput.value);
  interestOutput.textContent = input;
  updateCalculator();
});
compoundInput.addEventListener("input", updateCalculator);
yearInput.addEventListener("input", updateCalculator);

function updateCalculator() {
  const interest = Number(interestInput.value);
  const principle = Number(principleInput.value);
  const compound = Number(compoundInput.value);
  const year = Number(yearInput.value);
  const total = (1 + interest / compound) ** (compound * year) * principle;
  const earned = total - principle;
  console.log(total, earned);

  earnedOutput.textContent = earned.toFixed(2);
  totalOutput.textContent = total.toFixed(2);
}
