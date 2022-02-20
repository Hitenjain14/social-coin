//import { NextApiRequest, NextApiResponse } from "next";
import Coins from "../../models/coinModel";
import dbConnect from "../../dbConnect";

dbConnect();
// eslint-disable-next-line import/no-anonymous-default-export
export default async function (_req, res) {
  try {
    const allCoins = await Coins.find().sort({ price: -1 });

    res.status(200).json({
      status: "success",
      data: {
        allCoins,
      },
    });
  } catch {
    res.status(404);
  }
}
