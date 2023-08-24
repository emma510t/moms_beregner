let moms = 1.25;

document.querySelector("#button").addEventListener("click", getInput);

function getInput() {
  let intBeloeb = document.getElementById("input").value;
  let beloeb = parseInt(intBeloeb);
  console.log(beloeb);

  momsBeregner(beloeb * moms);
}

function momsBeregner(medMoms) {
  console.log(medMoms);
  document.querySelector("#ditbeloeb").textContent = `Dit beløb med moms er ${medMoms}`;
}
