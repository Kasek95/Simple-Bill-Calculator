const bill = document.querySelector('#price');
const numberOfPeople = document.querySelector('#people');
const tip = document.querySelector('#tip');
const error = document.querySelector('.error');
const cost = document.querySelector('.cost');
const costInfo = document.querySelector('.cost-info');
const countBtn = document.querySelector('.count');

console.log(bill);

const countPrice = () => {
	if (bill.value == '' || numberOfPeople.value == '' || tip.value == 0) {
		error.textContent = `Musisz uzupełnić wszystkie Pola`;
        costInfo.style.display = "none"
	} else {
        error.textContent = ""
        showBill()
	}
};

const showBill = () => {
	price = parseInt(bill.value);
	people = parseInt(numberOfPeople.value);
	newTip = tip.value;

	let sum = (price + (price * newTip) ) / people;
    costInfo.style.display = "block"
    cost.textContent = sum.toFixed(2)
   
};

countBtn.addEventListener('click', countPrice);
