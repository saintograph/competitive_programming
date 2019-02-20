function companyBotStrategy(a) {
	if (a.length === 0) {
		return 0;
	}
	let score = 0;
	let time = 0;
	for (let i = 0; i < a.length; i++) {
		if (a[i][1] < 1) {
		} else {
			score += a[i][0];
			time += a[i][1];
		}
	}
	if (score === 0 || time === 0) {
		return 0;
	}
	return score / time;
}

const a = [[4,1], [4,-1], [0,0], [6,1]]

companyBotStrategy(a)