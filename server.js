const express = require('express');

const port = process.env.PORT || 3000;

var app = express();

app.get('/', (req, res) => {
	res.send('<form action="/want">101:<input type="text" name="101"><br>102:<input type="text" name="102"><br>103:<input type="text" name="103"><br>104:<input type="text" name="104"><input type=submit></form>');
});

app.get('/want', (req, res) => {
	var order = "";
	var getOrder = (a) => {
		return new Promise ((resolve, reject) => {
		for (var i = 100; i < 800; i++) {
			if (a[i] > 0) {
				var x = a[i];
				order += i + ' - ' + x + '\n';
			}
		}
		resolve(order);
		});
	};
	
	getOrder(req.query).then((result) => {
		console.log(result);
		res.send(result);
	});
});

app.listen(port, () => {
	console.log(`Started on port ${port}`);
});