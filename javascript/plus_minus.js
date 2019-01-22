function plusMinus(arr) {
	let positiveNumbers = 0;
	let negativeNumbers = 0;
	let zeros = 0;
	const int = arr.length;
	arr.forEach((x) => {
		if (x > 0) {
			positiveNumbers += 1;
		} else if (x < 0) {
			negativeNumbers += 1;
		} else {
			zeros += 1;
		}
	});
	console.log((positiveNumbers / int).toFixed(6));
	console.log((negativeNumbers / int).toFixed(6));
	console.log((zeros / int).toFixed(6));
}
