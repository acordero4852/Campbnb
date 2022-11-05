const express = require("express");
const router = express.Router();
const prisma = require("../lib/prisma");
const { excludePassword } = require("../utils/users");

router.get("/", async (req, res) => {
  try {
    const listings = await prisma.listing.findMany({});
    res.json(listings);
  } catch (error) {
    console.log(error);
  }
});

router.get("/:listingid", async (req, res) => {
  try {
    const { listingid } = req.params;
    const listing = await prisma.listing.findUnique({
      where: {
        id: listingid,
      },
    });
    res.send(listing);
  } catch (error) {
    console.log(error);
  }
});
router.get("/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const listings = await prisma.listing.findMany({
      where: {
        hostUsername: username,
      },
    });
    res.send(listings);
  } catch (error) {
    console.log(error);
  }
});

router.post("/create/:username", async (req, res) => {
  try {
    const { username } = req.params;
    const { data } = req.body;
    const listing = await prisma.listing.create({
      data: {
        host: { connect: { username: username } },
        description: data.description,
        location: data.location,
      },
    });
    res.json(listing);
  } catch (error) {
    console.log(error);
  }
});

router.post("/reserve/:listingid", async (req, res) => {
  try {
    const { listingid } = req.params;
    const { data } = req.body;
    const reservation = await prisma.listing.update({
      where: { id: listingid },
      data: {
        client: { connect: { username: data.username } },
      },
    });
    res.send(reservation);
  } catch (error) {
    console.log(error);
  }
});
module.exports = router;
