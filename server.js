const express = require('express');
const path = require('path');

const app = express();

// Replace the '/dist/<to_your_project_name>'
app.use(express.static(__dirname + '/dist/WeatherApp'));

app.get('*', function(req,res) {
  res.sendFile(path.join(__dirname + '/dist/WeatherApp/index.html'));
})

app.listen(process.env.PORT || 8080);