require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoutes");
const PORT = process.env.PORT || 3002;
const MONGO_URL = process.env.MONGO_URL;

const app = express();
app.use(
  cors({
    origin: ["https://alphatrade-home.onrender.com", "http://localhost:3001"],
    credentials: true,
  }),
);
app.use(bodyParser.json());

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err));
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.use(cookieParser());

app.use(express.json());

app.use("/", authRoute);
/* app.get("/addPositions", async (req, res) => {
  let tempPositions = [
    {
      product: "CNC",
      name: "EVEREADY",
      qty: 2,
      avg: 316.27,
      price: 312.35,
      net: "+0.58%",
      day: "-1.24%",
      isLoss: true,
    },
    {
      product: "CNC",
      name: "JUBLFOOD",
      qty: 1,
      avg: 3124.75,
      price: 3082.65,
      net: "+10.04%",
      day: "-1.35%",
      isLoss: true,
    },
  ];
  tempPositions.forEach((item) => {
    let newPosition = new PositionsModel({
      product: item.product,
      name: item.name,
      qty: item.qty,
      avg: item.avg,
      price: item.price,
      net: item.net,
      day: item.day,
      isLoss: item.isLoss,
    });

    newPosition.save();
  });
  res.send("Done!");
}); */

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});
app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});
app.get("/allOrders", async (req, res) => {
  let allOrders = await OrdersModel.find({});
  res.json(allOrders);
});
app.post("/newOrder", async (req, res) => {
  const name = req.body.name;
  const qty = Number(req.body.qty);
  const price = Number(req.body.price);
  const mode = req.body.mode;
  let holding = await HoldingsModel.findOne({ name: name });
  if (!holding) {
    holding = new HoldingsModel({
      name,
      qty,
      avg: price,
      price: price,
      net: "0%",
      day: "0%",
      isLoss: false,
    });
  } else {
    const totalOld = holding.qty * holding.avg;
    const totalNew = qty * price;

    holding.qty = holding.qty + qty;
    holding.avg = (totalOld + totalNew) / holding.qty;
    holding.price = price;
  }
  let newOrder = new OrdersModel({
    name,
    qty,
    price,
    mode,
  });
  await holding.save();
  await newOrder.save();
  res.send("Order Saved");
});

app.post("/sellOrder", async (req, res) => {
  const name = req.body.name;
  const qty = Number(req.body.qty);
  const price = Number(req.body.price);
  const mode = req.body.mode;
  const holding = await HoldingsModel.findOne({ name: name });
  if (!holding) {
    return res.status(404).json({ message: "Stock not found in holdings" });
  }
  if (holding.qty < qty) {
    return res.status(400).json({ message: "Not enough quantity to sell" });
  }
  const newOrder = new OrdersModel({
    name,
    qty,
    price,
    mode,
  });
  await newOrder.save();
  holding.qty = holding.qty - qty;
  if (holding.qty === 0) {
    await HoldingsModel.deleteOne({ _id: holding._id });
  } else {
    await holding.save();
  }
  res.status(200).json({ message: "Sell order placed successfully" });
});
