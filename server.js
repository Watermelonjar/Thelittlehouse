const express = require('express');
const app = express();
const path = require ('path');
const favicon = require('serve-favicon');
const port = process.env.PORT || 3000;
app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));
// Static files from public

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
	console.log('Server is running on port ${port}');
});




