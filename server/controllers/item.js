import Item from "../models/item";

export const createItem = async (req, res) => {
  
  try {
    const item = new Item(req.body);
    await item.save();
    res.status(201).json(item);
  } catch (e) {
    res.status(400).json({ success: false, e });
  }
}

export const getItems = async (req,res) => {
  
  try{
    const items = await Item.find();

    res.status(200).json(items);
  } catch (e) {
    res.status(400).json({ success: false, e })
  }
}

export const updateItem = async (req,res) => {
  const allowedOptions = ['item', 'type', 'name', 'options'];

  const selectedOption = Object.keys(req.body);

  const doesExists = selectedOption.every(option => 
    allowedOptions.includes(option));

  if (!doesExists) {
    return res.status(404).json({ success: false, e });
  }

  try {
    const item = await Item.findById({ _id: req.params.id });

    selectedOption.forEach(option => item[option] = req.body[option]);

    await item.save();

    res.status(200).json(item);
  } catch (e) {
    res.status(404).json({ success: false, e });
  }
}


export const deleteItem = async (req, res) => {
  try{
    const item = await Item.findOneAndDelete({ _id: req.params.id });

    res.status(200).json("Item was deleted");
  } catch (e) {
    res.status(404).json({ success: false, e });
  }
}