const Artist = require("./../../models/artistModel");
import dbConnect from "../../dbConnect";

dbConnect();
// eslint-disable-next-line import/no-anonymous-default-export
export default async function (req, res) {
  try {
    const artistInfo = await Artist.findOne({ name: req.query.name });
    res.status(200).json({
      status: "success",
      data: {
        artistInfo,
      },
    });
  } catch {
    res.status(404);
  }
}
