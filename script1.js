let i = 0, j = 0, k = 0, m = 0, x = 0;
let n;
let na = [];

function sgpa() {
  n = document.getElementById("a").value;
  if (i < n) {
    document.getElementById("b").innerHTML = "Records of SGPA:";
    na[i] = document.getElementById("c").value;
    i++;
    document.getElementById("c").value = "";
    document.getElementById("b").innerHTML += " " + na.join(", ");
  }
}

let cg = document.getElementById("cg-el");

function cgpa() {
  let cse = [22,22,24,21,24,27,13,13];
  let ece = [22,22,24,21,24,26,13,13];
  let eie = [22,22,24,21,24,26,13,13];
  let eee = [22,21,24,21,24,26,13,13];
  let che = [22,22,24,21,24,26,13,13];

  let selectedBranch = document.getElementById("f").value;
  let branchCredits;

  if (selectedBranch === "CSE") branchCredits = cse;
  else if (selectedBranch === "ECE") branchCredits = ece;
  else if (selectedBranch === "EIE") branchCredits = eie;
  else if (selectedBranch === "EEE") branchCredits = eee;
  else if (selectedBranch === "CHE") branchCredits = che;
  else {
    cg.textContent = "Please select a branch.";
    return;
  }

  while (n > 0) {
    j += branchCredits[k] * na[m];
    x += branchCredits[k];
    k++;
    m++;
    n--;
  }

  let y = (j / x).toFixed(2);
  cg.textContent = "Your CGPA is: " + y;
}

function goBack() {
  window.history.back();
}
