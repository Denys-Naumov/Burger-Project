let modWindow = document.querySelector(".shop-modal");
let modOpen = document.querySelectorAll(".btn-paw");
let cross = document.querySelector(".shop-cross");
let incr = document.querySelectorAll(".incr");
let decr = document.querySelectorAll(".decr");
let input = document.querySelectorAll(".input-supl");
let price = document.querySelectorAll(".add-to-total");
let addTotalBtn = document.querySelectorAll(".add-btn-total");
let total = document.querySelector(".input-total")
let min = 0;
let max = 5;
let priceArr = [];
let inputValueArr = [];

console.log(input)

// Open, close modal
for (let i = 0; i < modOpen.length; i++) {
  modOpen[i].addEventListener("click", function () {
    modWindow.classList.add("dis-block");
    modWindow.classList.remove("dis-none");
  });
}

cross.addEventListener("click", function () {
  modWindow.classList.remove("dis-block");
  modWindow.classList.add("dis-none");
});

// Counters

function toggleBtnState(count, incBtn, decBtn) {
  decBtn.disabled = count <= min;
  incBtn.disabled = count >= max;
}

for (let i = 0; i < input.length; i++) {
  let currentCount = +input[i].value;
  toggleBtnState(currentCount, incr[i], decr[i]);
}
const updateInputValue = (value, index) =>
  toggleBtnState(value, incr[index], decr[index]);


for (let i = 0; i < incr.length; i++) {
  incr[i].addEventListener("click", function () {
    let currentCount = +input[i].value + 1;
    input[i].value = currentCount;
    updateInputValue(currentCount, i)
  });
}

for (let i = 0; i < decr.length; i++) {
  decr[i].addEventListener("click", function () {
    let currentCount = +input[i].value - 1;
    input[i].value = currentCount;
    updateInputValue(currentCount, i)
  });
}
// Counting

for (let i = 0; i < price.length; i++) {
  priceArr.push(price[i].innerText)
}

for (let i = 0; i < priceArr.length ; i++) {
  addTotalBtn[i].addEventListener("click", function() {
    let sum = (priceArr[i] * input[i].value) + (+total.value);
    total.value =+ sum
  })
 }
