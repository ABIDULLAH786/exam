const UserSchema = require("../models/UserModel")

exports.displayRegPage = (req, res) => {
    res.render("form")
}
exports.addNewUser = async (req, res) => {
    console.log("Img Name: ", req.files.img)
    console.log("red.body: ", req.body)
    if (req.body && req.files.img) {
        const { name, email, phone, country, state, city, address, zip } = req.body;
        const file = req.files.img;

        const result = await UserSchema.create({
            name: name,
            email: email,
            phone: phone,
            country: country,
            state: state,
            city: city,
            address: address,
            zip: zip,
            image: file.name
        });

        file.mv(`./public/img/` + file.name, async (e) => {
            if (e)
                console.log("error in image uploding")
            else
                console.log("Image uploaded")
        })
        res.redirect("/users");
    } else {
        console.log("Data is not complete")
        res.redirect("/");

    }

}
exports.userTable = async (req, res) => {
   
    const data = await UserSchema.find()

    res.render("userTable", { data })


}



// // Delete the user
exports.deletById = async (req, res) => {
    const { id } = req.params;

    const result = await UserSchema.findByIdAndDelete(id);
    res.redirect("/users")
    // res.sendFile(__dirname + '/views/home.ejs')
}

// // find the user by id and render that data to update.ejs file
// // this will casue when user click on update botton
exports.findUserById = async (req, res) => {
    const { id } = req.params;
    const result = await UserSchema.findById(id);
    // console.log(result)

    res.render("update", { result })
    
}
