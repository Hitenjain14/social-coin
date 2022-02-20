import Coin from "../../models/coinModel";
import dbConnect from "../../dbConnect";

dbConnect();

const handler = async (req, res) => {
  try {
    const data = await fetch(`https://randomuser.me/api/?results=7`);
    console.log(data);

    // const jsonData = await data.json();
    // const result = await Promise.all(
    //   jsonData.results.map(async (coin) => {
    //     //console.log(coin);
    //     await Coin.insertOne({
    //       logo: coin.picture.thumbnail,
    //       name: coin.name.title,
    //       symbol: coin.name.first,
    //       price: 567,
    //     });
    //   })
    // );

    res.status(200).json({ data: result });
  } catch {
    res.status(404);
  }
};

export default handler;
