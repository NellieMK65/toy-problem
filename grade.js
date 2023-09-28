document.addEventListener('DOMContentLoaded', () => {
	const button = document.getElementById('grade');

	function calculateGrade(marks) {
		if (marks >= 0 && marks <= 100) {
			let grade = 'E';

			if (marks > 79) {
				grade = 'A';
			} else if (marks >= 60) {
				grade = 'B';
			} else if (marks >= 50) {
				grade = 'C';
			} else if (marks >= 40) {
				grade = 'D';
			}

			alert(`Grade: ${grade}`);
		} else {
			marks = prompt(
				`Marks should be between 0 and 100. You provided ${marks}`
			);

			// Recursion
			calculateGrade(marks);
		}
	}

	button.addEventListener('click', () => {
		let marks = prompt('Input your marks');

		if (!marks) {
			return alert('No marks added');
		}

		// Convert prompt input to a number
		marks = Number(marks);

		// If the input is not of data type, we alert the user
		if (typeof marks !== 'number') {
			return alert('You must provide a number');
		}

		calculateGrade(marks);
	});
});
