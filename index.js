const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;
const fetch = require('node-fetch');
const githubToken = process.env.GITHUB_TOKEN;

express()
	.post('/', (req, res) => {
		console.log(req.body);
		res.setHeader('Content-Type', 'application/json');
		res.send(JSON.stringify({ a: 1 }));
	})
	.listen(PORT, () => console.log(`Listening on ${ PORT }`))
