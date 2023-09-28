document.addEventListener('DOMContentLoaded', () => {
	const button = document.getElementById('speed');

	button.addEventListener('click', () => {
		let speed = prompt('Enter speed');

		speed = Number(speed);

		const points = Math.floor((speed - 70) / 5);

		if (points <= 0) {
			alert('Ok');
		} else if (points <= 12) {
			alert(`Points: ${points}`);
		} else {
			alert('License suspended');
		}

		// const points = Math.floor((speed - 70) / 5);

		// if (speed <= 70) {
		// 	return alert('Ok');
		// } else {
		// 	const points = Math.floor((speed - 70) / 5);

		// 	if (points <= 12) {
		// 		alert(`Points: ${points}`);
		// 	} else {
		// 		alert('License suspended');
		// 	}
		// }
	});
});
