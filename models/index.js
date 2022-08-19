import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telephone: {
        type: Number,
        required: true
    }    
});

const personalDetails = mongoose.model('personalDetails', postSchema);

export default personalDetails;