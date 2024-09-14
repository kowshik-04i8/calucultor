// 'use strict';

function theme(){
	var b = document.body;
	document.querySelector('.theme').innerHTML = "🌙";
	b.classList.toggle("the");
	if(document.querySelector('.calculator').classList.toggle("calbg")){
		document.querySelector('.theme').innerHTML = "☀️";
	}
}

let currentResult = '';
function addNumber(number) {
	currentResult += number;
	updateResult();
}

function addDecimal() {
	if (currentResult.indexOf('.') === -1) {
		currentResult += '.';
		updateResult();
	}
}

function clearResult() {
	currentResult = '';
	updateResult();
}

function operate(operator) {
	if (currentResult !== '') {
		currentResult += ' ' + operator + ' ';
		updateResult();
	}
}

function calculate() {
	if (currentResult !== '') {
		try {
			currentResult = eval(currentResult).toString();
				updateResult();
			}
		catch (error) {
			currentResult = '';
			updateResult();
			alert('Invalid calculation');
		}
	}
}
function updateResult() {
	document.getElementById('result').value = currentResult;
}