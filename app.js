const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var items = [];

app.get('/', (req, res) => {
    res.render('list', {newListItem: items});
});
app.post('/', (req, res) => {
    var item = req.body.newItem;
    var button = req.body.btnClick;

    if (button === "addNewItem"){
        items.push(item);
    } else {
        for (let i=0; i<items.length; i++) {
            if (button === "deleteItem"+i){
                items.splice(i, 1);
            }
        }
    }
        
    res.redirect('/');
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});
