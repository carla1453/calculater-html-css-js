const result = document.querySelector(".put");

let myResult = "0";

result.textContent = myResult;

document.querySelector("#one").addEventListener("click", function () {
  myResult = myResult + "1";
  result.textContent = myResult;
});
document.querySelector("#two").addEventListener("click", function () {
  myResult = myResult + "2";
  result.textContent = myResult;
});
document.querySelector("#three").addEventListener("click", function () {
  myResult = myResult + "3";
  result.textContent = myResult;
});

document.querySelector("#four").addEventListener("click", function () {
  myResult = myResult + "4";
  result.textContent = myResult;
});

document.querySelector("#five").addEventListener("click", function () {
  myResult = myResult + "5";
  result.textContent = myResult;
});

document.querySelector("#six").addEventListener("click", function () {
  myResult = myResult + "6";
  result.textContent = myResult;
});

document.querySelector("#seven").addEventListener("click", function () {
  myResult = myResult + "7";
  result.textContent = myResult;
});

document.querySelector("#nine").addEventListener("click", function () {
  myResult = myResult + "9";
  result.textContent = myResult;
});

document.querySelector("#eight").addEventListener("click", function () {
  myResult = myResult + "8";
  result.textContent = myResult;
});
