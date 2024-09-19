const shortid = require("shortid");
const URL = require("../models/url");

async function generateNewShortUrl(req, res) {
  const body = req.body;
  if (!body.url) {
    return res.status(400).json({ err: "url is required" });
  }

  const shortID = shortid();
  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
  });

  return res.json({ id: shortID });
}

async function returnsNoOfClicks(req, res) {
  const shortId = req.params.shortId;
  const data = await URL.findOne({ shortId: shortId });

  const clickNumbers = data.visitHistory.length;

  return res
    .status(200)
    .json({ clicks: `The url was clicked ${clickNumbers} times` });
}

module.exports = { generateNewShortUrl, returnsNoOfClicks };
