const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // You can choose a different port

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/slack/command', (req, res) => {
  // Handle the incoming command and update the three different boxes.
  // You'll parse the command and use the data to update the boxes.
  // Then, respond to Slack with the updates.
  //do thing x, do thing y. Return boxes. Take info from boxes and paste with format.
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
