const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: [true, "Every Coin must have a name"],
  },
  profileImg: {
    type: String,
    required: [true, "Every Coin must have a Profile Image"],
  },

  walletAddress: {
    type: String,
    required: [true, "Every Coin must have a Wallet address"],
    select: false,
  },
  artistCoin: {
    type: mongoose.Schema.ObjectId,
    ref: "Coin",
    required: [true, "Every artist must have a coin"],
  },
  youtube: {
    type: String,
  },
  instagram: {
    type: String,
  },
  facebook: {
    type: String,
  },
  twitter: {
    type: String,
  },
});

export default mongoose.models.Artist || mongoose.model("Artist", artistSchema);
