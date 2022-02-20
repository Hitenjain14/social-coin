const mongoose = require("mongoose");

const coinSchema = new mongoose.Schema({
  logo: {
    type: String,
    required: [true, "Every Coin must have a logo"],
  },
  name: {
    type: String,
    unique: true,
    required: [true, "Every Coin must have a name"],
  },
  symbol: {
    type: String,
    required: [true, "Every Coin must have a symbol"],
  },
  address: {
    type: String,
    //required: [true, "Every Coin must have a address"],
  },
  price: {
    type: Number,
    required: [true, "Every Coin must have a price"],
  },
  change: {
    type: Number,
  },
});

//const Coin = mongoose.model("Coin", coinSchema);
export default mongoose.models.Coin || mongoose.model("Coin", coinSchema);
