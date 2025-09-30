const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  //Add your code here
  let total = document.querySelectorAll(".price");
  let totalPrice = 0;
  for (let sum of total) {
    totalPrice += Number(sum.textContent);
  }
  console.log(totalPrice);
};

getSumBtn.addEventListener("click", getSum);
