const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  //Add your code here
  let totalCell = document.querySelectorAll(".price");
  let totalPrice = 0;
  for (let cell of totalCell) {
    totalPrice += Number(cell.textContent);
  }

  const table = document.querySelector("table");
  const newRow = document.createElement("tr");
  const newCol1 = document.createElement("td");
  const newCol2 = document.createElement("td");

  newCol1.textContent = "Total Amount"
  newCol2.textContent = totalPrice;

  newRow.appendChild(newCol1);
  newRow.appendChild(newCol2);
	
  table.appendChild(newRow);
  
};

getSumBtn.addEventListener("click", getSum);
