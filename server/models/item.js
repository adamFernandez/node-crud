import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  "item" : {},
  "type" : String,
  "name" : String,
  "options" : [String],
}, { timestamps: true, minimize: false });

const Item = mongoose.model('item', itemSchema);

export default Item;