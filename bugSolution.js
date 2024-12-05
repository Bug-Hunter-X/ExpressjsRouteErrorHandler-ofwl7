const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  if (isNaN(userId) || userId <= 0) {
    return res.status(400).send({ error: 'Invalid user ID' });
  }
  // ...further code to fetch user data based on userId
  res.send({ user: { id: userId } });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});