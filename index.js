const bill = document.getElementById(`bill`);
const numPeople = document.querySelector(`#numpeople`);
const custom = document.querySelector(`.custom`);
const tips = document.querySelectorAll(`.percent`);
const amount = document.querySelector(`.amount`);
const total = document.querySelector(`.total`);
const error = document.querySelector(`.error`);
const border = document.querySelector(`.border`);
const resetBtn = document.querySelector(`.reset`);
const buttons = document.querySelector(`.buttons`);
// event listeners///////////////////////////////////////

buttons.addEventListener(`click`, (e) => {
	if (e.target.classList.contains(`percent`)) {
		tips.forEach((child) => {
			if (child === e.target) {
				child.classList.add(`active`);
			} else {
				child.classList.remove(`active`);
			}
			console.log(e.target.value);
			if (e.target.value === ``) {
				tipValue = 0;
			} else {
				tipValue = parseFloat(e.target.value) / 100;
			}
		});
		// custom.value = 0;
		calculateTip();
	}
});

bill.addEventListener(`input`, countMoney);
numPeople.addEventListener(`input`, countPeople);
resetBtn.addEventListener(`click`, reset);
// functions////////////////////////
// custom.value = 0;
custom.addEventListener(`input`, countPercent);
bill.value = ``;
numPeople.value = ``;
amount.innerHTML = `$${(0.0).toFixed(2)}`;
total.innerHTML = `$${(0.0).toFixed(2)}`;
let tipValue;
let numberOfPeople = ``;
let money = ``;

function countMoney() {
	money = parseFloat(bill.value);
	calculateTip();
}

function countPeople() {
	numberOfPeople = parseFloat(numPeople.value);

	calculateTip();
	if (numberOfPeople < 1) {
		error.style.display = `flex`;
		border.style.borderColor = `#e17457`;
	} else {
		error.style.display = `none`;
		border.style.borderColor = `transparent`;
	}
}
function countPercent() {
	// custom.value = 0;
	tipValue = parseFloat(custom.value) / 100;

	tips.forEach((e) => e.classList.remove(`active`));
	console.log(tipValue);

	calculateTip();
	// if (custom.value == ``) {
	// 	custom.value = 0;
	// }
}

function calculateTip() {
	if (numberOfPeople >= 1) {
		if (isNaN(money) || isNaN(tipValue) || isNaN(numberOfPeople)) {
			amount.innerHTML = `$${(0.0).toFixed(2)}`;
			total.innerHTML = `$${(0.0).toFixed(2)}`;
		} else if (money !== 0 && numberOfPeople !== 0) {
			// if (tipValue === 0) {
			// 	return;
			// } else {
			let tipamount = (money * tipValue) / numberOfPeople;
			console.log(money, numberOfPeople, tipValue);
			let totalamount = (money * (1 + tipValue)) / numberOfPeople;
			amount.innerHTML = `$${tipamount.toFixed(2)}`;
			total.innerHTML = `$${totalamount.toFixed(2)}`;
		}
	} else if (isNaN(numberOfPeople)) {
		amount.innerHTML = `$${(0.0).toFixed(2)}`;
		total.innerHTML = `$${(0.0).toFixed(2)}`;
	}
}
// }
function reset() {
	bill.value = ``;
	numPeople.value = ``;
	numberOfPeople = ``;
	money = ``;
	tipValue = ``;
	custom.value = ``;
	amount.innerHTML = `$${(0.0).toFixed(2)}`;
	total.innerHTML = `$${(0.0).toFixed(2)}`;
	tips.forEach((child) => {
		child.classList.remove(`active`);
	});
}
