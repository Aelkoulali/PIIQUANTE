const mongoose = require("mongoose");
//Check If the User Exist on The DataBase
const uniqueValidator = require("mongoose-unique-validator");
//Create A schema For The Users On the DatBase
const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model("User", userSchema);