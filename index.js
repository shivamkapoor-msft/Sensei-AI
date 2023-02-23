const express = require("express");
const OpenAI= require('openai');
const { Configuration, OpenAIApi }  = OpenAI;

const bodyParser = require('body-parser');
const cors = require("cors");
const app = express();

const configuration = new Configuration({
    organization: "org-spOT6QW3p2SX4AKbCRqy6VF4",
    apiKey: '<<secret>>',
});

const openai = new OpenAIApi(configuration)
const port = 3005;
app.use(bodyParser.json());
app.use(cors());

app.post("/", async(req, res) => {
    const {message} = req.body
    console.log(`${message}`);
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `explain ${message} to a student of class 5`,
        max_tokens: 2000,
        temperature: 0,
      });
      console.log(response.data);
      if(response.data)
      {
        if(response.data.choices[0].text)
        {
            res.json({
                message:response.data.choices[0].text
              })
        }
      }
});

app.listen(port, () => {
  console.log("Listening");
});

// var express = require('express');
// var app = express();
// var PORT = 3000;

// app.post('/', (req, res) => {
// res.send("POST Request Called")
// })

// app.listen(PORT, function(err){
// 	if (err) console.log(err);
// 	console.log("Server listening on PORT", PORT);
// });
// var express = require('express');
// var app = express();
// var PORT = 3000;
// app.get("/",(req,res) => res.send("Response from the GET request"));
// app.post('/', (req, res) => {
// res.send("POST Request Called")
// })

// app.listen(PORT, function(err){
// 	if (err) 
//   {
//     console.log(err)
//   }
// 	console.log("Server listening on PORT", PORT);
// });
