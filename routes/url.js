const express = require("express");
const {
  generateNewShortUrl,
  returnsNoOfClicks,
} = require("../controllers/url");

const router = express.Router();

router.post("/", generateNewShortUrl);

router.get("/analytics/:shortId", returnsNoOfClicks);

module.exports = router;
