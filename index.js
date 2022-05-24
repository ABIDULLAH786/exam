const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

app.use(express.static(path.join(__dirname,"public")))

app.use(express.json());
app.use(fileUpload());


app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(express.static("public"));
app.set('view engine', 'ejs');

// importing the database conneciton cuntion and excuting it 
const connectDatabse = require("./config/connection")
connectDatabse();

const UserRoutes = require("./routes/UserRoutes")
app.use(UserRoutes)


app.listen(9000, () => {
    console.log(`Server connected to port 9000...`)
})
