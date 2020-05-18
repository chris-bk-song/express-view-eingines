const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

const data = [
  {
    id: 1,
    text: 'Hot Garbage',
  },
  {
    id: 2,
    text: "Filet o' Tennis Shoe",
  },
  {
    id: 3,
    text: 'Apple Core Ice Cream',
  },
];

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'Trash Restaurant',
    special: data,
  });
});

app.listen(PORT, () => {
  console.log(`Running on http://localhost:${PORT}`);
});