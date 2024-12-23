const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const {userModel} = require ('../models/user')

const register = async (req , res) => {
    try{
        const exist = await userModel.findOne({ email : req.body.email });
        if(exist) {
            return res.status(409).send("user exist");
        }
        const hash = bcrypt.hashSync(req.body.password , 10);
        req.body.password = hash;
        const user = await userModel.create(req.body);
        return res.send ({
            message : "user created successfully",
            user,
        });
    }catch(error){
        console.error("error", error);
        return res.status(500).send("Internal Server Error");
    }
};

const login = async (req , res) => {
        try{
            const user = await userModel.findOne({ email : req.body.email });
            if(!user) {
                return res.status(404).send("user not found");
            }
            const ismatch = await bcrypt.compare(req.body.password, user.password);
            if (!ismatch){
                return res.status(401).send("invalid password");
            }
            const payload = {
                id: user._id,
                email: user.email,
                role: user.role,
                name: user.name,
                password: user.password,
            };
            const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1d"})

            return res.send({
                token,
                user:payload,
            });
        }catch(error){
            console.error("error", error);
            return res.status(500).send("Internal Server Error");
        }
};

const getUsers = async ( req, res ) => {
    try {
        const users = await userModel.find().sort({ createdAt: -1 }).select("-password");
        res.send(users)
    }catch (err){
        res.status(500).json ({msg : err.message})
    }
}

//Delete account user 
const deleteAcount = async (req, res) => {
    try{
        const id = req.params.id
        const userdeleted = await userModel.deleteOne({_id : id})
        return res.status(200).json({ msg: "User deleted successfully", userdeleted})

    }catch(error){
        console.error(error);
        return res.status(500).json({ err: "Server Error Occurred" });
    }
}

//update account user
const updateAccount = async (req, res) => {
    try{
    const userupdated = await userModel.findOneAndUpdate(
        {_id : req.params.id},
        { $set: {...req.body} },
        { new : true }
    ).select('-password');
    if (!userupdated ) {
        return res.status(404).json({ msg: "user not found" });
    }
    return  res.status(200).json({msg: "Account user updated", userupdated})
    }catch(error){
    console.error(error);
    return res.status(500).json({ err: "Server Error Occurred" });
    }
}

module.exports.authController = { register, login , getUsers, updateAccount, deleteAcount }