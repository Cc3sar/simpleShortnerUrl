import { Schema, model } from 'mongoose';

const urlSchema = new Schema({
    name: String,
    shortName: Number
});

export default model("Url", urlSchema);