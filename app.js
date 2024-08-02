const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
app.use(bodyParser.json());
app.use(cors());


const separateData = (data) => {
	const numbers = data.filter(item => !isNaN(item));
	const alphabets = data.filter(item => isNaN(item));
	const highestAlphabet = alphabets.length > 0 ? alphabets.sort((a, b) => b.localeCompare(a))[0] : null;

	return { numbers, alphabets, highestAlphabet };
};


app.post('/bfhl', (req, res) => {
	const { data } = req.body;

	if (!data || !Array.isArray(data)) {
		return res.status(400).json({ error: "Invalid input data" });
	}

	const { numbers, alphabets, highestAlphabet } = separateData(data);

	const response = {
		is_success: true,
		user_id: "Abheelash_Mishra_04072003",
		collegeEmailId: "ap2907@srmist.edu.in",
		roll_number: "RA2111003011143",
		numbers,
		alphabets,
		highest_alphabet: [highestAlphabet]
	};

	res.json(response);
});

app.get('/bfhl', (req, res) => {
	const response = {
		operation_code: "1"
	};

	res.json(response);
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
