// Express is used to build API/endpoints ; It is buit on top of http which is by default an internal lib in node.js ; easier code ; more security ; betyter handling of middleware i.e process that words between the request and response.
const express = require('express');  //import express to node js
//axios is used to call an API (make HTTP requests to weather app)
const axios = require('axios'); //import axios
const cors = require('cors'); // used to manage cross-origin requests between a client and a server
require('dotenv').config(); // to get environment variable

const app = express(); // creates instance of express application
//handle middleware processes
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:8080' // Allow requests only from my client frontend only
  }));
app.use(express.urlencoded({extended:true}));

const API_KEY = process.env.API_KEY;
const port = process.env.PORT || 3035;

// Create api endpoint : url and a call back function, which will be executed whenever the url is hit
// // Welcome page route
// app.get('/', (req, res) => {
//     res.send('Hello !!');
//     res.sendFile(__dirname + '/client/index.html');
// });

app.post('/weather', async (req, res) => {
    const { zip } = req.body;
    if (!zip) {
        return res.status(400).json({ message: 'ZIP code is required' });
      }
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?zip=${zip},us&appid=${API_KEY}`
      );
      console.log(response.data);
      res.json(response.data);

    } catch (error) {
        console.error('Error fetching weather data:', error);
      res.status(500).json({ message: 'Error fetching weather data - 3' });
    }
  });

//when we build an application it has to run on a specific port number, which we can define as below
app.listen(port, ()=>{
    console.log(`Application is running on port ${port}`);
})