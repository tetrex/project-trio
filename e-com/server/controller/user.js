const { body } = require("express-validator");
const { user, cart } = require("../model/index");
const { sendResponse } = require("./utils/utils");

exports.add = async (req, res) => {
    let { name, email, password } = req.body;

    try {
        if (!name) {
            return res.json(sendResponse("null value", "please provide name"));
        }
        if (!email) {
            return res.json(sendResponse("null value", "please provide email"));
        }

        if (!password) {
            return res.json(sendResponse("null value", "please provide password"));
        }

        let userData = await user.findOne({ email: email });

        if (userData) {
            return res.json(sendResponse(userData.email, "user already exists with this email"));
        }
        if (!userData) {
            let userCreated = await user.create({ name: name, email: email, passwordHash: password });
            if (userCreated) {
                console.log(userCreated)
                let cartData = await cart.create({ user: userCreated._id })
                if (cartData) {
                    console.log(cartData._id, " ", userCreated._id)
                    let userUpdated = await user.findByIdAndUpdate(userCreated._id, { cart: cartData._id }, { new: true })
                    if (userUpdated) {
                        return res.json(sendResponse(userUpdated, "user created successfully"));
                    }
                }
            }
        }
    } catch (error) {
        console.log(error)
        return res.json(sendResponse(error, "some error occurred"));
    }
};

exports.delete = async (req, res) => {
    let { id } = req.body
    if (!id) {
        res.json(sendResponse("null value", "need id to delete"))
    }
    try {
        user.findByIdAndDelete(id, function (err, data) {
            if (err) res.json(sendResponse(err, "some error Occured"))
            if (data) res.json(sendResponse(data, "deleted"))
        })
    } catch (error) {
        res.json(sendResponse(error, "some error occured"))
    }
}

exports.update = async (req, res) => {
    let { id, data } = req.body;
    if (!id) {
        res.json(sendResponse("null value", "need id to update"))
    }
    if (!data) {
        res.json(sendResponse("null value", "need data to update"))
    }
    try {
        let udatedData = await user.findByIdAndUpdate(id, data, { new: true })
        if (udatedData) {
            res.json(sendResponse(udatedData, "data updated"))
        }
    } catch (error) {
        res.json(sendResponse(error, "some error occured"))
    }
}

exports.view = async (req, res) => {
    let { id } = req.query
    try {
        let userData = await user.findById(id).populate({ path: "cart" })
        if (userData) {
            return res.json(sendResponse(userData, "user data here"));
        }
    } catch (error) {
        res.json(sendResponse(error, "some error occured"))
    }
}