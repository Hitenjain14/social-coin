import Coin from "../../models/coinModel";
import dbConnect from "../../dbConnect";

dbConnect();

const handler = async (req, res) => {
  try {
    const insert = await Coin.create(req.body);
    res.status(200).json({ data: insert });
  } catch {
    res.status(404);
  }
};
export default handler;
