import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  "item" : Object,
  "type" : String,
  "name" : String,
  "options" : Array,
}, { timestamps: true });

const Item = mongoose.model('item', itemSchema);

export default Item;