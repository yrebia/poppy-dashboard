const userModel = require("../models/user.model");

module.exports.allUsers = async (req, res) => {
    try {
        const docs = await userModel.find().sort({ createdAt: -1 });
        return res.status(200).send(docs);
    } catch (err) {
        return res.status(400).send("Error to get data: " + err);
    }
};

module.exports.addUser = async (req, res) => {
    const newUser = new userModel({
        email: req.body.email,
        name: req.body.name,
        forname: req.body.forname,
        password: req.body.password,
    });

    try {
        const user = await newUser.save();
        return res.status(201).json(user);
    } catch (err) {
        return res.status(400).json({ message: err });
    }
};
