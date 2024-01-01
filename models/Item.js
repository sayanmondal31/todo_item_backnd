const { 
     Schema,
     model
 } = require("mongoose");

const itemSchema = new Schema({
     title: {
          type: String,
          required: true
     },
     description: {
          type: String,
          required: true
     },

})

module.exports = model("Item", itemSchema);