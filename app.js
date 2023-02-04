const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

var items = ["Cook food", "Eat food"];


app.get('/', (req, res) => {
    res.render('list', {newListItem: items});
});
app.post('/', (req, res) => {
    var item = req.body.newItem;
    items.push(item);
    res.redirect('/');
});

// app.post('/', (req, res) => {
//     var num = req.body.numDelete;
//     // items.slice(num, 1);
//     console.log(num);
//     res.redirect('/');
// });


app.listen(3000, () => {
    console.log("Server started on port 3000");
});
