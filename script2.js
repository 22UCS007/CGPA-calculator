function sgpa1() {
  let n = parseInt(document.getElementById("a").value);
  let p = parseFloat(document.getElementById("g").value);
  let q = parseFloat(document.getElementById("h").value);
  let sg = document.getElementById("sg-el");

  let cse = [22,22,24,21,24,27,13,13];
  let ece = [22,22,24,21,24,26,13,13];
  let eie = [22,22,24,23,24,26,13,13];
  let eee = [22,21,24,21,24,26,13,13];
  let che = [22,22,24,21,24,26,13,13];

  let branchCredits;
  let x = 0, z = 0;

  let selectedBranch = document.getElementById("f").value;

  if (selectedBranch === "CSE") branchCredits = cse;
  else if (selectedBranch === "ECE") branchCredits = ece;
  else if (selectedBranch === "EIE") branchCredits = eie;
  else if (selectedBranch === "EEE") branchCredits = eee;
  else if (selectedBranch === "CHE") branchCredits = che;
  else {
    sg.textContent = "Please select a branch.";
    return;
  }

  for (let k = 0; k < n - 1; k++) {
    x += branchCredits[k];
  }
  z = branchCredits[n - 1];

  let Y = q * x;
  let U = ((p * (x + z)) - Y) / z;
  let u = parseFloat(U.toFixed(2));

  sg.textContent = "Your required SGPA for the next semester is: " + u;
}

function goBack() {
  window.history.back();
}
