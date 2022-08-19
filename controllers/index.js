import personalDetails from "../models/index.js";
// get route

export const getRoute = async (req, res) => {
    try {
        const post = await personalDetails.find();
        res.status(200).json(post)
    } catch (error) {
        res.status(404).json({ message: error.message});
    }
}

// post route
export const postRoute = async (req, res) =>{
    const post = req.body;
    const postData = new personalDetails(post);
    try {
        await postData.save();
        res.status(201).json(postData);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
    
}

// update route
export const updateRoute = async(req, res) => {
    const updateDetails = await personalDetails.findByIdAndUpdate(req.params.id, req.body,{
        new: true,
        runValidators: true
    });
    try {
        res.status(200).json(updateDetails);
    } catch (error) {
        res.status(409).json({ message: error.message});
    }
}

// delete route
export const deleteRoute = async (req, res) => {
    const deleteDetails= await personalDetails.findByIdAndDelete(req.params.id);
    try{
        res.status(204).json({ message: "delete object successfully"});
    }catch(error){
        res.status(500).json({ message: error.message});
    }
}