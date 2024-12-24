const { chaiseModel } = require('./chaiseModel');


const Addchaise = async (req, res) => {
    try{
        const { id, room } = req.body
        const newChaise =  await chaiseModel.create({id, room})
        res.status(201).json({ message: 'Chaise added successfully ', newChaise });
    }catch(error){
        console.error(error);
        return res.status(500).json({ err: "Server Error Occurred" });
    }
}

const getAllChaise = async (req, res) =>{
    try{
        const chaises = await chaiseModel.find()
        res.status(201).json({ message: ' get all Chaise', chaises });
    }catch(error){
        console.error(error);
        return res.status(500).json({ err: "Server Error Occurred" });
    }
}

const UpdateChaise = async (req, res) => {
    try{
        const { id } = req.params;
        const { status } = req.body;
        const chaise = await chaiseModel.findOneAndUpdate({ id }, { status }, { new: true });
        if (!chaise) {
            return res.status(404).json({ message: 'Chaise non trouvée' });
        }

        res.status(200).json({ message: 'Statut mis à jour avec succès', chaise });
    }catch(error){
        console.error(error);
        return res.status(500).json({ err: "Server Error Occurred" });
    }
}

module.exports.chaiseModel = { Addchaise , getAllChaise , UpdateChaise };