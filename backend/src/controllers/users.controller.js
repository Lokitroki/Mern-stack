const usersCtrl = {};
const User = require('../models/User');

usersCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.send(users);
};

usersCtrl.createUser = async (req, res) => {
    const {username} = req.body;
    const newUser = new User({username});
    await newUser.save();
    res.send('User created ');
};

usersCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndDelete (req.params.id);
    res.send('Users deleted ');
};

module.exports = usersCtrl;